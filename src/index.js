const { connectDB, getDB } = require("./config/database");

const {
  insertSurvey,
  getAllSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
} = require("./surveyModule");
const {
  createQuestion,
  readAllQuestions,
  readQuestionById,
  updateQuestion,
  deleteQuestion,
} = require("./questionModule");
const {
  createAnswer,
  readAllAnswers,
  readAnswerById,
  updateAnswer,
  deleteAnswer,
} = require("./answerModule");

async function run() {
  try {
    console.log("==== Gestion des Enquêtes ====");
    const newSurvey = {
      idSurvey: 1,
      name: "Enquête de Satisfaction 001",
      description: "Enquête visant à évaluer la satisfaction des clients concernant nos services.",
      createdAt: "2024-07-25T08:00:00Z",
      createdBy: {
        employeeName: "Mbaye",
        employeeRole: "Responsable du service client",
      },
    };
    await insertSurvey(newSurvey);
    await getAllSurveys();
    await getSurveyById(1);
    await updateSurvey(1, {
      name: "Enquête de Satisfaction 002 - Mise à jour",
      description: "Mise à jour de project.",
      createdAt: "2024-08-13T10:00:00Z",
      createdBy: {
        employeeName: "Amadou ba",
        employeeRole: "Developpeur",
      },
    });
    await deleteSurvey(1);
    await getAllSurveys();

    console.log("\n==== Gestion des Questions ====");
    const newQuestion = {
      idQuestion: 1,
      surveyId: 1,
      title: "Quelle est votre satisfaction globale ?",
      type: "rating",
      options: {
        minValue: 1,
        maxValue: 10,
        step: 1,
      },
    };
    await createQuestion(newQuestion);
    await readAllQuestions();
    await readQuestionById(1);
    await updateQuestion(4, {
      title: "Comment évalueriez-vous notre service ? (Mise à jour)",
    });
    await deleteQuestion(4);
    await readAllQuestions();

    console.log("\n==== Gestion des Réponses ====");
    const newAnswer = {
      idAnswer: 1,
      questionId: 1,
      title: "Très bien",
    };
    await createAnswer(newAnswer);
    await readAllAnswers();
    await readAnswerById(1);
    await updateAnswer(1, { options: [{ title: "Extrêmement satisfait" }] });
    await deleteAnswer(1);
    await readAllAnswers();
  } catch (err) {
    console.error("Erreur:", err);
  }
}

connectDB()
  .then(run)
  .catch(err => console.error("Connexion à la base de données échouée:", err));
