const express = require('express')
const {
  CAREER_DATABASE,
  normalizeSkills,
  getCompleteCareerEvaluation,
} = require('../services/careerService')

const router = express.Router()

// Test CareerPath API
router.get('/test', (req, res) => {
  res.json({
    status: 'success',
    message: 'CareerPath AI Career API is working 🚀',
  })
})

// List supported career tracks
router.get('/tracks', (req, res) => {
  const tracks = Object.keys(CAREER_DATABASE).map((key) => ({
    key,
    title: CAREER_DATABASE[key].title,
    icon: CAREER_DATABASE[key].icon,
    category: CAREER_DATABASE[key].category,
    description: CAREER_DATABASE[key].description,
  }))

  res.json({
    status: 'success',
    count: tracks.length,
    tracks,
  })
})

// Analyze student profile dynamically
router.post('/analyze', (req, res) => {
  try {
    const studentProfile = req.body.student || req.body || {}
    const completedSkills = req.body.completedSkills || []

    const evaluation = getCompleteCareerEvaluation(
      studentProfile,
      completedSkills
    )

    res.json({
      status: 'success',
      message: 'Career analysis completed dynamically',
      student: studentProfile,
      evaluation,
    })
  } catch (error) {
    console.error('Error analyzing career profile:', error)
    res.status(500).json({
      status: 'error',
      message: 'Failed to evaluate career profile',
      error: error.message,
    })
  }
})

module.exports = router