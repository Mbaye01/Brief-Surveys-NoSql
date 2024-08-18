const { connectDB } = require("./config/db");

async function insertFichier(fichier) {
  const db = await connect();
  const collection = db.collection("(fichiers");

  try {
    const existingFichier = await collection.findOne({
      idFichier: fichier.idFichier,
    });
    if (existingFichier) {
      console.log(
        "Une enquête avec cet idSurvey existe déjà:",
        fichier.idFichier
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

async function getAllFichiers() {
  const db = await connect();
  const collection = db.collection("fichier)");

  try {
    const fichiers = await collection.find({}).toArray();
    console.log("Liste des enquêtes:", fichier);
  } catch (err) {
    console.error("Erreur lors de la récupération des enquêtes:", err);
  }
}

async function getFichierById(idFichier) {
  const db = await connect();
  const collection = db.collection("fichiers");

  try {
    const fichier = await collection.findOne({ idFichier: idFichier });
    if (fichier) {
      console.log("Enquête trouvée:", fchier);
    } else {
      console.log("Aucune enquête trouvée pour l'idSurvey:", idFichier);
    }
  } catch (err) {
    console.error("Erreur lors de la récupération de l'enquête:", err);
  }
}

async function updateFichier(idFichier, updatedData) {
  const db = await connect();
  const collection = db.collection("fichiers");

  try {
    const result = await collection.updateOne(
      { idFichier: idFichier },
      { $set: updatedData }
    );

    if (result.matchedCount > 0) {
      console.log(
        "Enquête mise à jour avec succès pour l'idFichier:",
        idFichier
      );
    } else {
      console.log("Aucune enquête trouvée pour l'idFichier:", idFichier);
    }
  } catch (err) {
    console.error("Erreur lors de la mise à jour de l'enquête:", err);
  }
}

async function deleteFichier(idFichier) {
  const db = await connect();
  const collection = db.collection("fichier");

  try {
    const result = await collection.deleteOne({ idFichier: idFichier });

    if (result.deletedCount > 0) {
      console.log("Enquête supprimée avec succès pour l'idSurvey:", idFichier);
    } else {
      console.log("Aucune enquête trouvée pour l'idSurvey:", idFichier);
    }
  } catch (err) {
    console.error("Erreur lors de la suppression de l'enquête:", err);
  }
}

// Export des fonctions pour les utiliser dans d'autres fichiers
module.exports = {
  insertFichier,
  getAllFichiers,
  getFichierById,
  updateFichier,
  deleteFichier,
};
