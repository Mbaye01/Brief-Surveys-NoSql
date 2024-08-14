const { testConnection } = require("./config/database");
const { ObjectId } = require("mongodb"); // Assurez-vous d'avoir importé ObjectId

async function createFichiers(collectionName, data) {
  const db = await testConnection();
  const result = await db.collection(collectionName).insertOne(data);
  return result.insertedId;
}

async function readFichier(collectionName, query = {}) {
  const db = await testConnection();
  const documents = await db.collection(collectionName).find(query).toArray();
  return documents;
}

async function updateFichier(fichier, id, updates) {
  const db = await testConnection();
  const result = await db
    .collection(collectionName)
    .updateOne({ _id: new ObjectId(id) }, { $set: updates });
  return result.matchedCount;
}

async function deleteFicher(collectionName, id) {
  const db = await testConnection();
  const result = await db
    .collection(collectionName)
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}

module.exports = {
  createFichiers,
  readFichier,
  updateFichier,
  deleteFicher,
};
