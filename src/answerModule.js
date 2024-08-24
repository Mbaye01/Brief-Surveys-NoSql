const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "survey_app";
const client = new MongoClient(url)
const db = client.db(dbName)

async function connect() {
  const client = new MongoClient(url);
  await client.connect();
  console.log("Connected to MongoDB");
  const db = client.db(dbName);
  return { client, db };
}

async function testConnection() {
  try {
    const { client, db } = await connect();
    console.log(`Connected to database: ${db.databaseName}`);
    await client.close();
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
}

if (require.main === module) {
  testConnection();
}

module.exports = { db };
