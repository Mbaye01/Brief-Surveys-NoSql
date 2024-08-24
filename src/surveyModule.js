const { db } = require("./config/db");

const collection = db.collection("fichiers");

async function insertSurvey(fichier) {

  try {
    const existingFichier = await collection.findOne({
      idSurvey: fichier.idSurvey,
    });
    if (existingFichier) {
      console.log(
        "Une enquête avec cet idSurvey existe déjà:",
        fichier.idSurvey
      );
      return;
    }

    // Insérer la nouvelle enquête
    await collection.insertOne(fichier);
    console.log("Enquête insérée avec succès:", fichier);
  } catch (err) {
    console.error("Erreur lors de l'insertion de l'enquête:", err);
  }
}

async function getAllSurveys() {
  try {
    const fichiers = await collection.find({}).toArray();
    console.log("Liste des enquêtes:", fichiers);
  } catch (err) {
    console.error("Erreur lors de la récupération des enquêtes:", err);
  }
}

async function getSurveyById(idSurvey) {
  try {
    const fichier = await collection.findOne({ idSurvey: idSurvey });
    if (fichier) {
      console.log("Enquête trouvée:", fichier);
    } else {
      console.log("Aucune enquête trouvée pour l'idSurvey:", idSurvey);
    }
  } catch (err) {
    console.error("Erreur lors de la récupération de l'enquête:", err);
  }
}

async function updateSurvey(idSurvey, updatedData) {

  try {
    const result = await collection.updateOne(
      { idSurvey: idSurvey },
      { $set: updatedData }
    );

    if (result.matchedCount > 0) {
      console.log(
        "Enquête mise à jour avec succès pour l'idSurvey:",
        idSurvey
      );
    } else {
      console.log("Aucune enquête trouvée pour l'idSurvey:", idSurvey);
    }
  } catch (err) {
    console.error("Erreur lors de la mise à jour de l'enquête:", err);
  }
}

async function deleteSurvey(idSurvey) {
  try {
    const result = await collection.deleteOne({ idSurvey: idSurvey });

    if (result.deletedCount > 0) {
      console.log("Enquête supprimée avec succès pour l'idSurvey:", idSurvey);
    } else {
      console.log("Aucune enquête trouvée pour l'idSurvey:", idSurvey);
    }
  } catch (err) {
    console.error("Erreur lors de la suppression de l'enquête:", err);
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
