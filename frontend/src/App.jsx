import React, { useEffect, useMemo, useState } from 'react';

import Welcome from './pages/Welcome';
import StudentProfile from './pages/StudentProfile';
import Dashboard from './pages/Dashboard';
import CareerAnalysis from './pages/CareerAnalysis';
import LearningJourney from './pages/LearningJourney';
import ResumeBuilder from './pages/ResumeBuilder';

import { getCompleteCareerEvaluation } from './data/careerData';

const STORAGE_KEYS = {
  PAGE: 'careerpath_page',
  STUDENT_DATA: 'careerpath_student_data',
  COMPLETED_SKILLS: 'careerpath_completed_skills',
};

const EMPTY_STUDENT_DATA = {
  fullName: '',
  branch: '',
  currentYear: '',
  cgpa: '',
  skills: [],
  interests: [],
  careerGoal: '',
  projects: [],
  experience: [],
};

function loadInitialState() {
  const savedStudent = localStorage.getItem(
    STORAGE_KEYS.STUDENT_DATA
  );

  const savedSkills = localStorage.getItem(
    STORAGE_KEYS.COMPLETED_SKILLS
  );

  let completedSkillsByCareer = {};

  if (savedSkills) {
    try {
      const parsedSkills = JSON.parse(savedSkills);

      // New career-specific format
      if (
        parsedSkills &&
        typeof parsedSkills === 'object' &&
        !Array.isArray(parsedSkills)
      ) {
        completedSkillsByCareer = parsedSkills;
      }

      // Old format was one global array.
      // Do not reuse it because progress must be career-specific.
      else if (Array.isArray(parsedSkills)) {
        completedSkillsByCareer = {};
      }
    } catch (error) {
      console.error(
        'Failed to load completed skills:',
        error
      );

      completedSkillsByCareer = {};
    }
  }

  return {
    // Always start from the CareerPath AI welcome page.
    page: 'welcome',

    studentData: savedStudent
      ? JSON.parse(savedStudent)
      : EMPTY_STUDENT_DATA,

    completedSkillsByCareer,
  };
}

function App() {
  const initialState = useMemo(
    () => loadInitialState(),
    []
  );

  const [page, setPage] = useState(
    initialState.page
  );

  const [studentData, setStudentData] = useState(
    initialState.studentData
  );

  const [
    completedSkillsByCareer,
    setCompletedSkillsByCareer,
  ] = useState(
    initialState.completedSkillsByCareer
  );

  /*
   * ---------------------------------------------------------
   * Base career evaluation
   * ---------------------------------------------------------
   */

  const baseCareerEvaluation = useMemo(() => {
    return getCompleteCareerEvaluation(
      studentData,
      []
    );
  }, [studentData]);

  /*
   * ---------------------------------------------------------
   * Find active/current career
   * ---------------------------------------------------------
   */

  const activeCareer = useMemo(() => {
    return (
      baseCareerEvaluation?.primaryCareer?.name ||
      baseCareerEvaluation?.primaryCareer?.title ||
      baseCareerEvaluation?.career?.name ||
      baseCareerEvaluation?.career?.title ||
      baseCareerEvaluation?.recommendedCareer ||
      baseCareerEvaluation?.targetCareer ||
      studentData?.careerGoal ||
      ''
    );
  }, [
    baseCareerEvaluation,
    studentData,
  ]);

  /*
   * ---------------------------------------------------------
   * Get completed skills only for current career
   * ---------------------------------------------------------
   */

  const completedSkills =
    completedSkillsByCareer[activeCareer] || [];

  /*
   * ---------------------------------------------------------
   * Save student data
   * ---------------------------------------------------------
   */

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.STUDENT_DATA,
      JSON.stringify(studentData)
    );
  }, [studentData]);

  /*
   * ---------------------------------------------------------
   * Save career-specific progress
   * ---------------------------------------------------------
   */

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.COMPLETED_SKILLS,
      JSON.stringify(completedSkillsByCareer)
    );
  }, [completedSkillsByCareer]);

  /*
   * ---------------------------------------------------------
   * Save page
   * ---------------------------------------------------------
   *
   * The app still saves the current page while navigating,
   * but loadInitialState() always starts from Welcome.
   */

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.PAGE,
      page
    );
  }, [page]);

  /*
   * ---------------------------------------------------------
   * Calculate career evaluation
   * using ONLY current career's completed skills
   * ---------------------------------------------------------
   */

  const careerEvaluation = useMemo(() => {
    return getCompleteCareerEvaluation(
      studentData,
      completedSkills
    );
  }, [
    studentData,
    completedSkills,
  ]);

  /*
   * ---------------------------------------------------------
   * Toggle learning skill
   * ---------------------------------------------------------
   */

  const toggleSkill = (skillName) => {
    if (!activeCareer || !skillName) {
      return;
    }

    setCompletedSkillsByCareer(
      (previous) => {
        const currentSkills =
          previous[activeCareer] || [];

        const alreadyCompleted =
          currentSkills.includes(skillName);

        let updatedSkills;

        if (alreadyCompleted) {
          // Remove skill
          updatedSkills =
            currentSkills.filter(
              (skill) =>
                skill !== skillName
            );
        } else {
          // Add skill only once
          updatedSkills = [
            ...currentSkills,
            skillName,
          ];
        }

        return {
          ...previous,
          [activeCareer]: updatedSkills,
        };
      }
    );
  };

  /*
   * ---------------------------------------------------------
   * Reset all learning progress
   * ---------------------------------------------------------
   */

  const resetProgress = () => {
    setCompletedSkillsByCareer({});

    localStorage.removeItem(
      STORAGE_KEYS.COMPLETED_SKILLS
    );
  };

  /*
   * ---------------------------------------------------------
   * Render pages
   * ---------------------------------------------------------
   */

  switch (page) {
    /*
     * -------------------------------------------------------
     * WELCOME
     * -------------------------------------------------------
     */

    case 'welcome':
      return (
        <Welcome
          onStart={() =>
            setPage('profile')
          }
        />
      );

    /*
     * -------------------------------------------------------
     * STUDENT PROFILE
     * -------------------------------------------------------
     *
     * IMPORTANT:
     * StudentProfile uses onComplete(formData).
     * This fixes the Continue button.
     * -------------------------------------------------------
     */

    case 'profile':
      return (
        <StudentProfile
          studentData={studentData}

          onComplete={(formData) => {
            setStudentData(formData);
            setPage('dashboard');
          }}

          onBack={() =>
            setPage('welcome')
          }
        />
      );

    /*
     * -------------------------------------------------------
     * DASHBOARD
     * -------------------------------------------------------
     */

    case 'dashboard':
      return (
        <Dashboard
          studentData={studentData}
          careerEvaluation={careerEvaluation}
          completedSkills={completedSkills}
          onNavigate={setPage}
          onBack={() =>
            setPage('profile')
          }
        />
      );

    /*
     * -------------------------------------------------------
     * CAREER ANALYSIS
     * -------------------------------------------------------
     */

    case 'careerAnalysis':
      return (
        <CareerAnalysis
          studentData={studentData}
          careerEvaluation={careerEvaluation}
          completedSkills={completedSkills}
          onNavigate={setPage}
          onBack={() =>
            setPage('dashboard')
          }
        />
      );

    /*
     * -------------------------------------------------------
     * LEARNING JOURNEY
     * -------------------------------------------------------
     */

    case 'learningJourney':
      return (
        <LearningJourney
          studentData={studentData}
          careerEvaluation={careerEvaluation}
          completedSkills={completedSkills}
          onToggleSkill={toggleSkill}
          onResetProgress={resetProgress}
          onNavigate={setPage}
          onBack={() =>
            setPage('dashboard')
          }
        />
      );

    /*
     * -------------------------------------------------------
     * RESUME BUILDER
     * -------------------------------------------------------
     */

    case 'resumeBuilder':
      return (
        <ResumeBuilder
          studentData={studentData}
          careerEvaluation={careerEvaluation}
          completedSkills={completedSkills}
          onNavigate={setPage}
          onBack={() =>
            setPage('dashboard')
          }
        />
      );

    /*
     * -------------------------------------------------------
     * FALLBACK
     * -------------------------------------------------------
     */

    default:
      return (
        <Welcome
          onStart={() =>
            setPage('profile')
          }
        />
      );
  }
}

export default App;