const { connect } = require("./config/database");
const { ObjectId } = require("mongodb");

async function createQuestion(data) {
  const { db } = await connect();
  const result = await db.collection("questions").insertOne(data);
  return result.insertedId;
}

async function readQuestions(query = {}) {
  const { db } = await connect();
  const documents = await db.collection("questions").find(query).toArray();
  return documents;
}

async function updateQuestion(id, updates) {
  const { db } = await connect();
  const result = await db
    .collection("questions")
    .updateOne({ _id: new ObjectId(id) }, { $set: updates });
  return result.matchedCount;
}

async function destroyQuestion(id) {
  const { db } = await connect();
  const result = await db
    .collection("questions")
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}

module.exports = {
  createQuestion,
  readQuestions,
  updateQuestion,
  destroyQuestion,
};
