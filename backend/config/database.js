require('dns').setServers(['8.8.8.8','1.1.1.1'])
const { MongoClient } = require('mongodb')

let client
let database

async function connectDB() {
  if (database) {
    return database
  }

  const uri = process.env.MONGODB_URI

  if (!uri) {
    throw new Error('MONGODB_URI is missing from backend/.env')
  }

  client = new MongoClient(uri)

  await client.connect()

  database = client.db('CareerPathAI')

  console.log('MongoDB Atlas connected successfully! ✅')

  return database
}

function getDB() {
  if (!database) {
    throw new Error('Database is not connected yet')
  }

  return database
}

module.exports = { connectDB, getDB }
