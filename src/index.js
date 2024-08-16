const { ObjectId } = require("mongodb");

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
  readReponse,
  updateReponse,
  destroyReponse,
} = require("./reponseModule");

(async () => {
  try {
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

    const questions = await readQuestions({});
    console.log("Liste des questions:", questions);

    const updateCount = await updateQuestion(new ObjectId(newQuestionId), {
      title: "Comment évalueriez-vous notre service client ?",
    });
    console.log(`Nombre de questions mises à jour: ${updateCount}`);

    const deleteCount = await destroyQuestion(new ObjectId(newQuestionId));
    console.log(`Nombre de questions supprimées: ${deleteCount}`);
  } catch (error) {
    console.error("Erreur lors de l'opération:", error);
  }

  try {
    const newFichierId = await createFichier({
      name: "Fichier de test",
      description: "Ceci est un fichier de test.",
    });
    console.log("Fichier créé avec succès, ID:", newFichierId);

    const fichiers = await readFichier({});
    console.log("Liste des fichiers:", fichiers);

    const updateCount = await updateFichier(new ObjectId(newFichierId), {
      description: "Description mise à jour.",
    });
    console.log(`Nombre de fichiers mis à jour: ${updateCount}`);

    const deleteCount = await destroyFichier(new ObjectId(newFichierId));
    console.log(`Nombre de fichiers supprimés: ${deleteCount}`);
  } catch (error) {
    console.error("Erreur lors de l'opération:", error);
  }
})();
