const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "abc_corporation";

async function connect() {
  const client = new MongoClient(url); // Supprimez les options dépréciées
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

testConnection();

module.exports = { connect };
