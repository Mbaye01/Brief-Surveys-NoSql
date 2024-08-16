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

## Creer la Base de données

pour creer la base de donnée

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

**fichierModule** ,
**questionModule**,
**reponseModule**.

---

**1- fichierModule**

- createFichier(collectionName, data) .

  Paramètres :
  collectionName (String) : Le nom de la collection.

  data (Object) : Les données du fichier à insérer.

  Retour : L'ID du fichier inséré.

- readFichier(collectionName, query = {})

  Paramètres :
  collectionName (String) : Le nom de la collection.

  query (Object) : Le filtre de recherche (optionnel).

  Retour : Un tableau des fichiers correspondant.

- updateFichier(collectionName, id, updates)

  Paramètres :
  collectionName (String) : Le nom de la collection.

  id (String) : L'ID du fichier à mettre à jour.

  updates (Object) : Les données à mettre à jour.

  Retour : Le nombre de fichiers mis à jour.

- destroyFichier(collectionName, id)

  Paramètres : collectionName (String) : Le nom de la collection.

  id (String) : L'ID du fichier à supprimer.

  Retour : Le nombre de fichiers supprimés.

  **2- questionModule**

  - createQuestion(collectionName, data)

    Paramètres : Similaires à createFichier.

- readQuestion(collectionName, query = {})

  Paramètres : Similaires à readFichier.

- updateQuestion(collectionName, id, updates)

  Paramètres : Similaires à updateFichier.

- destroyQuestion(collectionName, id)

  Paramètres : Similaires à deleteFichier.

**3- reponseModule**

- createReponse(collectionName, data)

  Paramètres : Similaires à createFichier.

- readReponse(collectionName, query = {})

  Paramètres : Similaires à readFichier.

- updateReponse(collectionName, id, updates)

  Paramètres : Similaires à updateFichier.

- destroyReponse(collectionName, id)

  Paramètres : Similaires à deleteFichier.

## Authors

Mbaye Abdellahi
