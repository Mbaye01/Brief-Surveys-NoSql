const { db } = require("./config/db");

const collection = db.collection("answers");

// Fonction pour créer une nouvelle réponse
async function createAnswer(idAnswer, questionId, options) {
  try {
    // Vérifier si l'ID de la réponse existe déjà
    const existingAnswer = await collection.findOne({ idAnswer });
    if (existingAnswer) {
      console.log(`Une réponse avec l'ID ${idAnswer} existe déjà.`);
      return;
    }

    const newAnswer = {
      idAnswer,
      questionId,
      options,
    };
    await collection.insertOne(newAnswer);
    console.log("Réponse créée avec succès:", newAnswer);
  } catch (err) {
    console.error("Erreur lors de la création de la réponse:", err);
  }
}

// Fonction pour lire toutes les réponses
async function readAllAnswers() {
  try {
    const answers = await collection.find({}).toArray();
    console.log("Liste des réponses:", answers);
  } catch (err) {
    console.error("Erreur lors de la récupération des réponses:", err);
  }
}

// Fonction pour lire une réponse par son ID
async function readAnswerById(idAnswer) {
  try {
    const answer = await collection.findOne({ idAnswer });
    if (answer) {
      console.log("Réponse trouvée:", answer);
    } else {
      console.log("Réponse non trouvée pour l'ID:", idAnswer);
    }
  } catch (err) {
    console.error("Erreur lors de la récupération de la réponse:", err);
  }
}

// Fonction pour mettre à jour une réponse
async function updateAnswer(idAnswer, updatedData) {
  try {
    const result = await collection.updateOne(
      { idAnswer },
      { $set: updatedData }
    );
    if (result.matchedCount > 0) {
      console.log("Réponse mise à jour avec succès pour l'ID:", idAnswer);
    } else {
      console.log("Aucune réponse trouvée pour l'ID:", idAnswer);
    }
  } catch (err) {
    console.error("Erreur lors de la mise à jour de la réponse:", err);
  }
}

// Fonction pour supprimer une réponse
async function deleteAnswer(idAnswer) {
  try {
    const result = await collection.deleteOne({ idAnswer });
    if (result.deletedCount > 0) {
      console.log("Réponse supprimée avec succès pour l'ID:", idAnswer);
    } else {
      console.log("Aucune réponse trouvée pour l'ID:", idAnswer);
    }
  } catch (err) {
    console.error("Erreur lors de la suppression de la réponse:", err);
  }
}

// Exporter les fonctions pour les utiliser dans d'autres fichiers
module.exports = {
  createAnswer,
  readAllAnswers,
  readAnswerById,
  updateAnswer,
  deleteAnswer,
};
