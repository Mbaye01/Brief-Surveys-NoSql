const { MongoClient, ObjectId } = require("mongodb");
const db = require("./cofig/database");

async function createQuestion(Question, data) {
  const db = await testConnection();
  const result = await db.collection(Question).insertOne(data);
  return result.insertedId;
}

async function readQuestions(Question, query = {}) {
  const db = await testConnection();
  const documents = await db.collection(Question).find(query).toArray();
  return documents;
}

async function updateQuestion(Question, id, updates) {
  const db = await testConnection();
  const result = await db
    .collection(Question)
    .updateOne({ _id: new ObjectId(id) }, { $set: updates });
  return result.matchedCount;
}

async function deleteQuestion(Question, id) {
  const db = await testConnection();
  const result = await db
    .collection(Question)
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}

module.exports = {
  createQuestion,
  readQuestions,
  updateQuestion,
  deleteQuestion,
};
