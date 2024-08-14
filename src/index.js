const {
  createFichier,
  readFichiers,
  updateFichiers,
  deleteFichier,
} = require("./fichierModule");
const {
  createQuestion,
  readQuestions,
  updateQuestion,
  deleteQuestion,
} = require("./questionsModule");
const {
  createAnswer,
  readAnswers,
  updateAnswer,
  deleteAnswer,
} = require("./reponseModule");

// Exemple d'utilisation
(async () => {
  try {
    // Supprimer une question
    await deleteQuestion(2);
    console.log("Supprimé avec succès");
  } catch (error) {
    console.error("Erreur lors de la suppression de la question:", error);
  }
})();
