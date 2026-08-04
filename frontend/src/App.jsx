import { useState } from 'react'
import Welcome from './pages/Welcome'
import StudentProfile from './pages/StudentProfile'
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

  // Step 1 → Step 2
  const handleProfileComplete = (data) => {
    console.log('Student Profile:', data)

    setStudentData(data)
    setPage('analysis')
  }

  // Step 2 → Step 3
  const handleLearningStart = () => {
    setPage('learning')
  }

  // Step 3 → Resume
  const handleResumeStart = (skills) => {
    console.log('Completed Skills:', skills)

    setCompletedSkills(skills)
    setPage('resume')
  }

  // Welcome
  if (page === 'welcome') {
    return (
      <Welcome
        onStart={() => setPage('profile')}
      />
    )
  }

  // Student Profile
  if (page === 'profile') {
    return (
      <StudentProfile
        onComplete={handleProfileComplete}
      />
    )
  }

  // Career Analysis
  if (page === 'analysis') {
    return (
      <CareerAnalysis
        studentData={studentData}
        onContinue={handleLearningStart}
      />
    )
  }

  // Learning Journey
  if (page === 'learning') {
    return (
      <LearningJourney
        onComplete={handleResumeStart}
      />
    )
  }

  // Resume Builder
  if (page === 'resume') {
    return (
      <ResumeBuilder
        studentData={studentData}
        completedSkills={completedSkills}
      />
    )
  }

  return null
}

export default App