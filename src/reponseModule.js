const { testConnection } = require("./config/database");

async function createReponse(reponse, data) {
  const db = await testConnection();
  const result = await db.collection(reponse).insertOne(data);
  return result.insertedId;
}

async function readReponse(reponse, query = {}) {
  const db = await testConnection();
  const documents = await db.collection(reponse).find(query).toArray();
  return documents;
}

async function updateReponse(reponse, id, updates) {
  const db = await testConnection();
  const result = await db
    .collection(reponse)
    .updateOne({ _id: new ObjectId(id) }, { $set: updates });
  return result.matchedCount;
}

async function deleteReponse(reponse, id) {
  const db = await testConnection();
  const result = await db
    .collection(reponse)
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}

module.exports = {
  createReponse,
  readReponse,
  deleteReponse,
  updateReponse,
};
