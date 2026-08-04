const express = require('express')
const cors = require('cors')
require('dotenv').config()

const careerRoutes = require('./routes/careerRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'CareerPath AI Backend is running 🚀',
  })
})

app.use('/api/career', careerRoutes)

const PORT = 5000

app.listen(PORT, () => {
  console.log(
    `CareerPath AI backend running on http://localhost:${PORT}`
  )
})