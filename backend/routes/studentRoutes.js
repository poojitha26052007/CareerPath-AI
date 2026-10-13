const express = require('express')
const { getDB } = require('../config/database')

const router = express.Router()

// Save or update a student's profile and learning progress
router.put('/:studentId', async (req, res) => {
  try {
    const studentId = String(req.params.studentId || '').trim()

    if (!studentId || studentId.length > 100) {
      return res.status(400).json({
        status: 'error',
        message: 'A valid student ID is required',
      })
    }

    const { studentData, completedSkillsByCareer } = req.body

    if (
      !studentData ||
      typeof studentData !== 'object' ||
      Array.isArray(studentData) ||
      !completedSkillsByCareer ||
      typeof completedSkillsByCareer !== 'object' ||
      Array.isArray(completedSkillsByCareer)
    ) {
      return res.status(400).json({
        status: 'error',
        message: 'Student data and learning progress are required',
      })
    }

    const db = getDB()

    await db.collection('students').updateOne(
      { studentId },
      {
        $set: {
          studentData,
          completedSkillsByCareer,
          updatedAt: new Date(),
        },
        $setOnInsert: {
          studentId,
          createdAt: new Date(),
        },
      },
      { upsert: true }
    )

    res.json({
      status: 'success',
      message: 'Student profile and progress saved',
    })
  } catch (error) {
    console.error('Error saving student:', error.message)
    res.status(500).json({
      status: 'error',
      message: 'Failed to save student data',
    })
  }
})

// Load a student's saved profile and learning progress
router.get('/:studentId', async (req, res) => {
  try {
    const studentId = String(req.params.studentId || '').trim()

    if (!studentId || studentId.length > 100) {
      return res.status(400).json({
        status: 'error',
        message: 'A valid student ID is required',
      })
    }

    const db = getDB()
    const student = await db.collection('students').findOne(
      { studentId },
      { projection: { _id: 0 } }
    )

    if (!student) {
      return res.status(404).json({
        status: 'error',
        message: 'Student not found',
      })
    }

    res.json({
      status: 'success',
      student,
    })
  } catch (error) {
    console.error('Error loading student:', error.message)
    res.status(500).json({
      status: 'error',
      message: 'Failed to load student data',
    })
  }
})

module.exports = router