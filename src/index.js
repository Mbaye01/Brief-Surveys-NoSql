const { connectDB, getDB } = require("./config/db");

const {
  insertSurvey,
  getAllSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
} = require("./surveyModule");
const {
  createAnswer,
  readAllAnswers,
  readAnswerById,
  updateAnswer,
  deleteAnswer,
} = require("./answerModule");
const {
  createQuestion,
  readAllQuestions,
  readQuestionById,
  updateQuestion,
  deleteQuestion,
} = require("./questionModule");

insertSurvey({
  idSurvey: 1,
  name: "Enquête de Satisfaction 002",
  description: "Deuxième enquête visant à évaluer la satisfaction des clients.",
  createdAt: "2024-08-13T10:00:00Z",
  createdBy: {
    employeeName: "Mbaye Abdellahi",
    employeeRole: "Chef de projet",
  },
});
getAllSurveys();
getSurveyById(1);
updateSurvey(1, {
  name: "Enquête de Satisfaction 002 - Mise à jour",
  description: "Mise à jour de project.",
  createdAt: "2024-08-13T10:00:00Z",
  createdBy: {
    employeeName: "Abdoul ba",
    employeeRole: "Developpeur",
  },
});
deleteSurvey(2);
getAllSurveys();

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
