const { connectDB } = require('./config/database');

// async function createQuestion(idQuestion, surveyId, questionText, options) {
//     const db = await connectDB();
//     const collection = db.collection('survey_questions');

//     try {
//         // Vérification que l'ID de la question n'existe pas déjà
//         const existingQuestion = await collection.findOne({ idQuestion });
//         if (existingQuestion) {
//             console.log(`Une question avec l'ID ${idQuestion} existe déjà.`);
//             return;
//         }

//         // Vérification que le tableau options existe et n'est pas vide
//         if (!options || options.length === 0) {
//             console.log("Les options doivent être fournies et ne peuvent pas être vides.");
//             return;
//         }

//         const newQuestion = {
//             idQuestion,
//             surveyId,
//             questionText,
//             options,
//         };
//         await collection.insertOne(newQuestion);
//         console.log("Question créée avec succès:", newQuestion);
//     } catch (err) {
//         console.error("Erreur lors de la création de la question:", err);
//     }
// }


async function createQuestion(questionData) {
    try {

        const db = await connectDB();
        const questionsCollection = db.collection('survey_questions');
        const fichiersCollection = db.collection('fichiers');

        // Vérification si l'ID de la question ou de l'enquête existe déjà
        const existingQuestion = await questionsCollection.findOne({ idQuestion: questionData.idQuestion });
        if (existingQuestion) {
            throw new Error(`Une question avec l'ID ${questionData.idQuestion} existe déjà.`);
        }
      
        const existingSurvey = await fichiersCollection.findOne({ surveyId: questionData.surveyId });
        if (!existingSurvey) {
            console.log(`Aucune enquête trouvée avec l'ID `);
        }

        await questionsCollection.insertOne(questionData);
        console.log('Nouvelle question créée avec succès');
    } catch (error) {
        console.error(`Erreur lors de l'insertion de la question : ${error.message}`);
        throw error;
    }
}




async function readAllQuestions() {
    const db = await connectDB();
    const collection = db.collection('survey_questions');

    try {
        const questions = await collection.find({}).toArray();
        console.log("Liste des questions:", questions);
    } catch (err) {
        console.error("Erreur lors de la récupération des questions:", err);
    }
}

async function readQuestionById(idQuestion) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');

    try {
        const question = await collection.findOne({ idQuestion });
        if (question) {
            console.log("Question trouvée:", question);
        } else {
            console.log("Question non trouvée pour l'ID:", idQuestion);
        }
    } catch (err) {
        console.error("Erreur lors de la récupération de la question:", err);
    }
}

// async function updateQuestion(idQuestion, updatedData) {
//     const db = await connectDB();
//     const collection = db.collection('survey_questions');

//     try {
//         const result = await collection.updateOne(
//             { idQuestion },
//             { $set: updatedData }
//         );
//         if (result.matchedCount > 0) {
//             console.log("Question mise à jour avec succès pour l'ID:", idQuestion);
//         } else {
//             console.log("Aucune question trouvée pour l'ID:", idQuestion);
//         }
//     } catch (err) {
//         console.error("Erreur lors de la mise à jour de la question:", err);
//     }
// }

async function updateQuestion(idQuestion, updatedQuestionData) {
    try {
        const db = await connectDB();
        const questionsCollection = db.collection('survey_questions');
        const surveysCollection = db.collection('fichiers');

        const existingQuestion = await questionsCollection.findOne({ idQuestion });
        if (!existingQuestion) {
            throw new Error(`Aucune question trouvée avec l'ID ${idQuestion}`);
        }

        if (updatedQuestionData.surveyId) {
            const existingSurvey = await surveysCollection.findOne({ surveyId: updatedQuestionData.surveyId });
            if (!existingSurvey) {
                throw new Error(`Aucune enquête trouvée avec l'ID ${updatedQuestionData.surveyId}`);
            }
        }

        await questionsCollection.updateOne({ idQuestion }, { $set: updatedQuestionData });
        console.log('Question mise à jour avec succès');
    } catch (error) {
        console.error(`Erreur lors de la mise à jour de la question : ${error.message}`);
        throw error;
    }
}


async function deleteQuestion(idQuestion) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');

    try {
        const result = await collection.deleteOne({ idQuestion });
        if (result.deletedCount > 0) {
            console.log("Question supprimée avec succès pour l'ID:", idQuestion);
        } 
           
    } catch (err) {
        console.error("Erreur lors de la suppression de la question:", err);
    }
}

module.exports = {
    createQuestion,
    readAllQuestions,
    readQuestionById,
    updateQuestion,
    deleteQuestion,
};
