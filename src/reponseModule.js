const { connect } = require("./config/database");
const { ObjectId } = require("mongodb");

async function createReponse(data) {
  const { db } = await connect();
  const result = await db.collection("reponses").insertOne(data);
  return result.insertedId;
}

async function readReponse(query = {}) {
  const { db } = await connect();
  const documents = await db.collection("reponses").find(query).toArray();
  return documents;
}

async function updateReponse(id, updates) {
  const { db } = await connect();
  const result = await db
    .collection("reponses")
    .updateOne({ _id: new ObjectId(id) }, { $set: updates });
  return result.matchedCount;
}

async function destroyReponse(id) {
  const { db } = await connect();
  const result = await db
    .collection("reponses")
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}

module.exports = {
  createReponse,
  readReponse,
  updateReponse,
  destroyReponse,
};
