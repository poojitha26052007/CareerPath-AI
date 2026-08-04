const express = require('express')

const router = express.Router()

// Test CareerPath API
router.get('/test', (req, res) => {
  res.json({
    status: 'success',
    message: 'CareerPath AI Career API is working 🚀',
  })
})

// Analyze student profile
router.post('/analyze', (req, res) => {
  const {
    name,
    branch,
    year,
    cgpa,
    skills,
    interests,
    careerGoal,
  } = req.body

  res.json({
    status: 'success',
    message: 'Career analysis completed',
    student: {
      name,
      branch,
      year,
      cgpa,
      skills,
      interests,
      careerGoal,
    },
  })
})

module.exports = router