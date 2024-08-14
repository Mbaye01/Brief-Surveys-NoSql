const {
  createFichier,
  readFichier,
  updateFichier,
  destroyFichier,
} = require("./fichierModule");
const {
  createQuestion,
  readQuestions,
  updateQuestion,
  destroyQuestion,
} = require("./questionModule");
const {
  createReponse,
  readReponses,
  updateReponse,
  destroyReponse,
} = require("./reponseModule");

// Exemple d'utilisation
(async () => {
  try {
    // Créer une question
    const newQuestionId = await createQuestion({
      title: "Comment évalueriez-vous notre service ?",
      type: "rating",
      options: {
        minValue: 1,
        maxValue: 5,
        step: 1,
      },
      answers: [
        { title: "Très satisfait" },
        { title: "Satisfait" },
        { title: "Neutre" },
        { title: "Insatisfait" },
        { title: "Très insatisfait" },
      ],
    });
    console.log("Question créée avec succès, ID:", newQuestionId);

    // Lire les questions
    const questions = await readQuestions({});
    console.log("Liste des questions:", questions);

    // Mettre à jour une question
    const updateCount = await updateQuestion(newQuestionId, {
      title: "Comment évalueriez-vous notre service client ?",
    });
    console.log(`Nombre de questions mises à jour: ${updateCount}`);

    // Supprimer une question
    const deleteCount = await destroyQuestion(newQuestionId);
    console.log(`Nombre de questions supprimées: ${deleteCount}`);
  } catch (error) {
    console.error("Erreur lors de l'opération:", error);
  }

  try {
    // Créer un fichier
    const newFichierId = await createFichier({
      name: "Fichier de test",
      description: "Ceci est un fichier de test.",
    });
    console.log("Fichier créé avec succès, ID:", newFichierId);

    // Lire les fichiers
    const fichiers = await readFichier({});
    console.log("Liste des fichiers:", fichiers);

    // Mettre à jour un fichier
    const updateCount = await updateFichier(newFichierId, {
      description: "Description mise à jour.",
    });
    console.log(`Nombre de fichiers mis à jour: ${updateCount}`);

    // Supprimer un fichier
    const deleteCount = await destroyFichier(newFichierId);
    console.log(`Nombre de fichiers supprimés: ${deleteCount}`);
  } catch (error) {
    console.error("Erreur lors de l'opération:", error);
  }

  try {
    // Créer une réponse
    const newReponseId = await createReponse({
      questionId: newQuestionId,
      text: "Oui, je suis satisfait.",
    });
    console.log("Réponse créée avec succès, ID:", newReponseId);

    // Lire les réponses
    const reponses = await readReponses({});
    console.log("Liste des réponses:", reponses);

    // Mettre à jour une réponse
    const updateCount = await updateReponse(newReponseId, {
      text: "Non, je ne suis pas satisfait.",
    });
    console.log(`Nombre de réponses mises à jour: ${updateCount}`);

    // Supprimer une réponse
    const deleteCount = await destroyReponse(newReponseId);
    console.log(`Nombre de réponses supprimées: ${deleteCount}`);
  } catch (error) {
    console.error("Erreur lors de l'opération:", error);
  }
})();
