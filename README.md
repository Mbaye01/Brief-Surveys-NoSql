# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

   ```bash
   git clone <https://github.com/Mbaye01/Brief-Surveys-NoSql.git>
   ```

2. **Accédez au dossier du projet :**

   ```bash
   cd Brief-Surveys-NoSql

   ```

3. **Installez les dépendances :**

   ```bash
   npm install
   ```

4. **Configurez la base de données :**

   - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
   - Mettez les paramètres de connexion dans `config/database.js`.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Base de données

Nom de la base de donnée : abc_corporation
La base de données abc_corporation contient les collections suivantes :

_fichiers_ :

Cette collection stocke les questions des enquêtes.
_questions_ :

Cette collection contient les résultats des enquêtes.
_reponses_ :

Cette collection stocke les réponses possibles pour les questions.

## Modules

L'application est structurée en trois modules principaux :

_fichierModule_ :

- Fonctions
  createFichier, readFichier, updateFichier, destroyFichier.

_questionModule_ :

- Fonctions
  createQuestion, readQuestion, updateQuestion, destroyQuestion.

_reponseModule_ :

- Fonctions :
  createReponse, readReponse, updateReponse, destroyReponse.

## Authors

Mbaye Abdellahi
