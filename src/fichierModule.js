async function connect() {
  if (!db) {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db(dbName);
  }
  return db;
}

async function createSurveys(survey) {
  const db = await connect();
  const result = await db.collection(question).insertOne(question);
  return result.insertedId;
}

async function readSurvays(survey, query = {}) {
  const db = await connect();
  const documents = await db.collection(collect).find(query).toArray();
  return documents;
}

async function updateSurvey(survey, id, updates) {
  const db = await connect();
  const result = await db
    .collection(survey)
    .updateOne({ _id: new ObjectId(id) }, { $set: updates });
  return result.matchedCount;
}

async function deleteSurvey(survey, id) {
  const db = await connect();
  const result = await db
    .collection(survey)
    .deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}

module.exports = {
  createSurvey,
  readSurvey,
  updateSurvey,
  deleteSurvey,
};
