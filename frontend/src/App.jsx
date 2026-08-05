import { useState } from 'react'
import Welcome from './pages/Welcome'
import StudentProfile from './pages/StudentProfile'
import Dashboard from './pages/Dashboard'
import CareerAnalysis from './pages/CareerAnalysis'
import LearningJourney from './pages/LearningJourney'
import ResumeBuilder from './pages/ResumeBuilder'

function App() {
  const [page, setPage] = useState('welcome')

  const [studentData, setStudentData] = useState({
    name: '',
    branch: '',
    year: '',
    cgpa: '',
    skills: '',
    interests: '',
    careerGoal: '',
  })

  const [completedSkills, setCompletedSkills] = useState([])

  // Student Profile → Dashboard
  const handleProfileComplete = (data) => {
    console.log('Student Profile:', data)

    setStudentData(data)
    setPage('dashboard')
  }

  // Dashboard → Career Analysis
  const handleCareerAnalysis = () => {
    setPage('analysis')
  }

  // Dashboard → Learning Journey
  const handleLearningJourney = () => {
    setPage('learning')
  }

  // Dashboard → Resume
  const handleResumePage = () => {
    setPage('resume')
  }

  // Career Analysis → Learning Journey
  const handleLearningStart = () => {
    setPage('learning')
  }

  // Learning Journey → Resume
  const handleResumeStart = (skills) => {
    console.log('Completed Skills:', skills)

    setCompletedSkills(skills)
    setPage('resume')
  }

  // Career Analysis → Dashboard
  const handleBackToDashboard = () => {
    setPage('dashboard')
  }

  // Learning Journey → Dashboard
  const handleLearningBack = () => {
    setPage('dashboard')
  }

  // Resume → Dashboard
  const handleResumeBack = () => {
    setPage('dashboard')
  }

  // Resume → Learning Journey
  const handleResumeToLearning = () => {
    setPage('learning')
  }

  // =========================
  // WELCOME
  // =========================

  if (page === 'welcome') {
    return (
      <Welcome
        onStart={() => setPage('profile')}
      />
    )
  }

  // =========================
  // STUDENT PROFILE
  // =========================

  if (page === 'profile') {
    return (
      <StudentProfile
        onComplete={handleProfileComplete}
      />
    )
  }

  // =========================
  // DASHBOARD
  // =========================

  if (page === 'dashboard') {
    return (
      <Dashboard
        studentData={studentData}
        completedSkills={completedSkills}
        onCareerAnalysis={handleCareerAnalysis}
        onLearningJourney={handleLearningJourney}
        onResume={handleResumePage}
      />
    )
  }

  // =========================
  // CAREER ANALYSIS
  // =========================

  if (page === 'analysis') {
    return (
      <CareerAnalysis
        studentData={studentData}
        onContinue={handleLearningStart}
        onBack={handleBackToDashboard}
      />
    )
  }

  // =========================
  // LEARNING JOURNEY
  // =========================

  if (page === 'learning') {
    return (
      <LearningJourney
        onComplete={handleResumeStart}
        onBack={handleLearningBack}
      />
    )
  }

  // =========================
  // RESUME BUILDER
  // =========================

  if (page === 'resume') {
    return (
      <ResumeBuilder
  studentData={studentData}
  completedSkills={completedSkills}
  onBack={() => setPage('dashboard')}
/>
    )
  }

  return null
}

export default App