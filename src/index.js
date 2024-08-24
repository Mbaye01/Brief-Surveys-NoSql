const {
  createSurvey,
  getSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
} = require("./surveyModule");
const {
  createQuestion,
  getQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
} = require("./questionModule");
const {
  createAnswer,
  getAnswers,
  getAnswerById,
  updateAnswer,
  deleteAnswer,
} = require("./answerModule");

async function run() {
  try {
    console.log("==== Gestion des Enquêtes ====");
    const newSurvey = {
      id: 1,
      name: "Enquête de Satisfaction 001",
      description:
        "Enquête visant à évaluer la satisfaction des clients concernant nos services.",
      createdAt: "2024-07-25T08:00:00Z",
      createdBy: {
        employeeName: "Mbaye",
        employeeRole: "Responsable du service client",
      },
    };
    await createSurvey(newSurvey);

<<<<<<< HEAD

createQuestion(4, "Quelle est votre satisfaction globale ?", "rating", {
  minValue: 1,
  maxValue: 10,
  step: 1,
});
readAllQuestions();
readQuestionById(1);
updateQuestion(4, {
  title: "Comment évalueriez-vous notre service ? (Mise à jour)",
});
deleteQuestion(4);
readAllQuestions();



createAnswer(2, 1, [{ title: "Très bien" }]);
readAllAnswers();
readAnswerById(1);
updateAnswer(1, { options: [{ title: "Extrêmement satisfait" }] });
deleteAnswer(1);
readAllAnswers();
=======
    await getSurveys();
    await updateSurvey(1, { name: "Enquête de Satisfaction Mise à Jour" });
    await getSurveyById(1);
    await deleteSurvey(1);

    console.log("\n==== Gestion des Questions ====");
    const newQuestion = {
      id: 3,
      surveyId: 1,
      title: "Comment évalueriez-vous notre service ?",
      type: "rating",
      options: {
        minValue: 1,
        maxValue: 5,
        step: 1,
      },
    };
    await createQuestion(newQuestion);

    await getQuestions();
    await getQuestionById(3);
    await updateQuestion(3, {
      title: "Comment avez-vous entendu parler de nous ?",
    });
    await deleteQuestion(3);

    console.log("\n==== Gestion des Réponses ====");
    const newAnswer = {
      id: 1,
      questionId: 1,
      title: "Satisfait",
    };
    await createAnswer(newAnswer);

    await getAnswers();
    await getAnswerById(1);
    await updateAnswer(1, { title: "Très satisfait" });
    await deleteAnswer(1);
  } catch (err) {
    console.error("Erreur:", err);
  }
}

run();
>>>>>>> 812b2de2507821b84fdc2583e98f290f104f677d
