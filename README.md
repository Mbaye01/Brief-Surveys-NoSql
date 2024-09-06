## Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Get, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [ [Node.js](https://nodejs.org/fr)] (version 12 ou supérieure)
- [ MongoDB](https://www.mongodb.com/try/download/community)
  (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

**Clonez le repository :**

```bash
git clone https://github.com/Mbaye01/Brief-Surveys-NoSql.git

```

**Accédez au dossier du projet :**

```bash
cd Brief-Surveys-NoSql
```

**Installez les dépendances :**

```bash
npm install
```

**Utilisation**

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Documentation des Modules

- **index.js :** est l'entrée principale de l'application. Il contient une fonction principale **main** qui englobe l'appel de toutes les fonctions des différents modules.

- `ajoutSurvey({ surveyId:int ,name: string, description: string, createdAt: date}, createdBy:{employeeName: string, employeeRole: string}})` : pour ajouter un document dans la collection de **surveys**.
- `listerSurvey()` : pour afficher tous les documents de la collection de **surveys**.
- `modifierSurvey(surveyId: int ,{name: string, description: string, createdAt: date}, createdBy:{employeeName: string, employeeRole: string}}) ` : pour modifier un document de la collection de **surveys**.
- `supprimerSurvey(surveyId: int )` : pour supprimer un document de la collection de **surveys**.

- **questionModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **questions**. Il est composé des fonctions suivantes :

  - `ajouterQuestion({questionId: int, surveyId: int, title: string, type: string, options:{minValue:int, maxValue:int, step:int}})` : pour ajouter un document dans la collection de **questions**.
  - `listerQuestions()` : pour afficher tous les documents dans la collection de **questions**.
  - `modifierQuestion(questionId: int, {title: string, type: string, options:{minValue:int, maxValue:int, step:int}})` : pour modifier un document dans la collection de **questions**.
    `supprimerQuestion(questionId: int)` : pour supprimer un document dans la collection de **questions**.

- **answerModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **reponses**. Il est composé des fonctions suivantes :

  - ` ajouterReponse({ questionId: int,reponseId: int, title: string})` : Pour ajouter un document dans la collection de **reponses**.
  - `listerReponses()` : Pour afficher tous les documents dans la collection de **reponses**.
  - `modifierReponse(reponseId: int, {title: string})` : Pour modifier un document dans la collection de **reponses**.
  - `supprimerReponse(reponseId: int,)` : Pour supprimer un document dans la collection de **reponses**.

## Authors

[Mbaye Abdoulaye Kalidou](https://github.com/Mbaye01)
