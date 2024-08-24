const { connectDB } = require("./config/database");

async function createSurvey(survey) {
  const db = await connectDB();
  const collection = db.collection("surveys");

  try {
    const existingSurvey = await collection.findOne({ id: survey.id });
    if (existingSurvey) {
      console.log(`Une enquête avec cet idSurvey ${survey.id}existe déjà.`);
      return null;
    }

    const result = await collection.insertOne(survey);
    console.log(`Enquête insérée avec succès: (ID: ${survey.id})`);
    return result;
  } catch (err) {
    console.error("Erreur lors de la creation  de l'enquête:", err);
    throw err;
  }
}

async function getSurveyById(id) {
  const db = await connectDB();
  const collection = db.collection("surveys");

  try {
    const survey = await collection.findOne({ id: id });
    if (!survey) {
      throw new Error(`Enquette avec l'ID ${id} introuvable.`);
    }
    console.log(`Enquete trouvée avec l'ID ${id} :`, survey);
    return survey;
  } catch (err) {
    console.error("Erreur lors de la récupération des enquêtes:", err);
    throw err;
  }
}

async function getSurveys() {
  const db = await connectDB();
  const collection = db.collection("surveys");

  try {
    const surveys = await collection.find().toArray();
    console.log(`Total de ${surveys.length} enquetes trouvées:`, surveys);
    return surveys;
  } catch (err) {
    console.error("Erreur lors de la récupération des enquête:", err);
    throw err;
  }
}

async function updateSurvey(id, update) {
  const db = await connectDB();
  const collection = db.collection("surveys");

  try {
    const result = await collection.updateOne({ id: id }, { $set: update });

    if (result.matchedCount === 0) {
      throw new Error(`Enquete avec l'ID ${id} introvable.`);
    }
    console.log(`Enquête avec l'ID ${id} mise à jour avec succès.`);
    return result;
  } catch (err) {
    console.error("Erreur lors de la mise à jour de l'enquête:", err);
    throw err;
  }
}

async function deleteSurvey(id) {
  const db = await connectDB();
  const collection = db.collection("surveys");

  try {
    const result = await collection.deleteOne({ id: id });

    if (result.deletedCount === 0) {
      throw new Error(`Enquete avec l'ID ${id} introuvable.`);
    }
    console.log(`Enquête avec l'ID ${id} supprimée avec succès.`);
    return result;
  } catch (err) {
    console.error("Erreur lors de la suppression de l'enquête:", err);
    throw err;
  }
}

module.exports = {
  createSurvey,
  getSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
};
