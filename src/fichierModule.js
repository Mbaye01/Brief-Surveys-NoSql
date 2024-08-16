const { connect } = require("./config/database");
const { ObjectId } = require("mongodb");

async function createFichier(data) {
  const { db } = await connect();
  const result = await db.collection("fichiers").insertOne(data);
  return result.insertedId;
}

async function readFichier(query = {}) {
  const { db } = await connect();
  const documents = await db.collection("fichiers").find(query).toArray();
  return documents;
}

async function updateFichier(id, updates) {
  const { db } = await connect();
  const result = await db
    .collection("fichiers")
    .updateOne({ _id: new ObjectId(id) }, { $set: updates });
  return result.matchedCount;
}

async function destroyFichier(id) {
  const { db } = await connect();
  const result = await db
    .collection("fichiers")
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}

module.exports = {
  createFichier,
  readFichier,
  updateFichier,
  destroyFichier,
};
