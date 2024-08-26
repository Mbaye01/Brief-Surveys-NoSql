const { connectDB } = require('./config/database');

async function createAnswer(idAnswer, questionId, options) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');

    try {
        // Vérifier si l'ID de la réponse existe déjà
        const existingAnswer = await collection.findOne({ idAnswer });
        if (existingAnswer) {
            console.log(`Une réponse avec l'ID ${idAnswer} existe déjà.`);
            return;
        }

        // Création de la nouvelle réponse
        const newAnswer = {
            idAnswer,
            questionId,
            options
        };
        await collection.insertOne(newAnswer);
        console.log("Réponse créée avec succès:", newAnswer);
    } catch (err) {
        console.error("Erreur lors de la création de la réponse:", err);
    }
}

async function readAllAnswers() {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    
    try {
        const answers = await collection.find({}).toArray();
        console.log("Liste des réponses:", answers);
        return answers;
    } catch (err) {
        console.error("Erreur lors de la récupération des réponses:", err);
    }
}

async function readAnswerById(idAnswer) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    
    try {
        const answer = await collection.findOne({ idAnswer });
        if (answer) {
            console.log("Réponse trouvée:", answer);
            return answer;
        } else {
            // console.log("Réponse non trouvée pour l'ID:", idAnswer);
        }
    } catch (err) {
        console.error("Erreur lors de la récupération de la réponse:", err);
    }
}

async function updateAnswer(idAnswer, updatedData) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    
    try {
        const result = await collection.updateOne({ idAnswer }, { $set: updatedData });
        if (result.matchedCount > 0) {
            console.log("Réponse mise à jour avec succès pour l'ID:", idAnswer);
            return result;
        } 
    } catch (err) {
        console.error("Erreur lors de la mise à jour de la réponse:", err);
    }
}

async function deleteAnswer(idAnswer) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    
    try {
        const result = await collection.deleteOne({ idAnswer });
        if (result.deletedCount > 0) {
            console.log("Réponse supprimée avec succès pour l'ID:", idAnswer);
            return result;
        } else {
            console.log("Aucune réponse trouvée pour l'ID:", idAnswer);
        }
    } catch (err) {
        console.error("Erreur lors de la suppression de la réponse:", err);
    }
}

module.exports = {
    createAnswer,
    readAllAnswers,
    readAnswerById,
    updateAnswer,
    deleteAnswer
};
