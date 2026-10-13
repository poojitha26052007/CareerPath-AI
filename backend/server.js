const express = require('express')
const cors = require('cors')
require('dotenv').config()

const careerRoutes = require('./routes/careerRoutes')
const studentRoutes = require('./routes/studentRoutes')
const { connectDB } = require('./config/database')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'CareerPath AI Backend is running',
  })
})

app.use('/api/career', careerRoutes)
app.use('/api/students', studentRoutes)

const PORT = process.env.PORT || 5000

async function startServer() {
  try {
    await connectDB()

    app.listen(PORT, () => {
      console.log(
        `CareerPath AI backend running on port ${PORT}`
      )
    })
  } catch (error) {
    console.error('Failed to start backend:', error.message)
    process.exit(1)
  }
}

startServer()