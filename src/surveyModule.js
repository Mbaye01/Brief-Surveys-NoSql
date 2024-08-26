const { connectDB } = require("./config/database");

async function insertSurvey(fichier) {
  const db = await connectDB();
  const collection = db.collection("fichiers");

  try {
    const existingFichier = await collection.findOne({
      idSurvey: fichier.idSurvey,
    });
    if (existingFichier) {
      console.log(
        `Une enquête avec cet idSurvey ${fichier.idSurvey} existe déjà.`
      );
      return null;
    }

    const result = await collection.insertOne(fichier);
    console.log(`Enquête insérée avec succès : (ID: ${fichier.idSurvey})`);
    return result;
  } catch (err) {
    console.error("Erreur lors de l'insertion de l'enquête:", err);
    throw err;
  }
}

async function getAllSurveys() {
  const db = await connectDB();
  const collection = db.collection("fichiers");

  try {
    const fichiers = await collection.find().toArray();
    console.log(`Total de ${fichiers.length} enquêtes trouvées:`, fichiers);
    return fichiers;
  } catch (err) {
    console.error("Erreur lors de la récupération des enquêtes:", err);
    throw err;
  }
}

async function getSurveyById(idSurvey) {
  const db = await connectDB();
  const collection = db.collection("fichiers");

  try {
    const fichier = await collection.findOne({ idSurvey: idSurvey });
    if (!fichier) {
      throw new Error(`Enquête avec l'ID ${idSurvey} introuvable.`);
    }
    console.log(`Enquête trouvée avec l'ID ${idSurvey} :`, fichier);
    return fichier;
  } catch (err) {
    console.error("Erreur lors de la récupération de l'enquête:", err);
    throw err;
  }
}

async function updateSurvey(idSurvey, updatedData) {
  const db = await connectDB();
  const collection = db.collection("fichiers");

  try {
    const result = await collection.updateOne(
      { idSurvey: idSurvey },
      { $set: updatedData }
    );

    if (result.matchedCount === 0) {
      throw new Error(`Enquête avec l'ID ${idSurvey} introuvable.`);
    }
    console.log(`Enquête avec l'ID ${idSurvey} mise à jour avec succès.`);
    return result;
  } catch (err) {
    console.error("Erreur lors de la mise à jour de l'enquête:", err);
    throw err;
  }
}

async function deleteSurvey(idSurvey) {
  const db = await connectDB();
  const collection = db.collection("fichiers");

  try {
    const result = await collection.deleteOne({ idSurvey: idSurvey });

    if (result.deletedCount === 0) {
      throw new Error(`Enquête avec l'ID ${idSurvey} introuvable.`);
    }
    console.log(`Enquête avec l'ID ${idSurvey} supprimée avec succès.`);
    return result;
  } catch (err) {
    console.error("Erreur lors de la suppression de l'enquête:", err);
    throw err;
  }
}

// Export des fonctions pour les utiliser dans d'autres fichiers
module.exports = {
  insertSurvey,
  getAllSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
};
