# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

**Clonez le repository :**

```bash
git clone <https://github.com/Mbaye01/Brief-Surveys-NoSql.git>
```

**Accédez au dossier du projet :**

```bash
cd Brief-Surveys-NoSql

```

**Installez les dépendances :**

```bash
npm install
```

**Configurez la base de données :**

- Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
- Mettez les paramètres de connexion dans `config/database.js`.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Créer une base de données MongoDB

**Etape 1** : Ouvrir la ligne de commande (cmd)

- Ouvrez cmd sur votre ordinateur.

**Etape 2** : Lancer MongoDB

- Assurez-vous que MongoDB est installé et que le serveur MongoDB est en cours d'exécution.

- Connectez-vous à votre instance MongoDB en tapant la commande suivante :

```
mongo
```

**Etape 3** : Créer une base de données

Pour créer une nouvelle base de données, utilisez la commande use suivie du nom de la base de données.

Par exemple,
pour créer une base de données appelée _ma_base_de_donnees_ :

```
use ma_base_de_donnees

```

**Etape 4** : Créer une collection
Pour créer une collection, utilisez la commande suivante.

Par exemple, pour créer une collection appelée _ma_collection_ :

```
db.createCollection("ma_collection")

```

**Etape 5** : Insérer un document dans la collection

Pour insérer un document dans la collection nouvellement créée, utilisez les commandes insertOne ou insertMany.

```
db.ma_collection.insertOne({ })
```

```
db.ma_collection.insertMany([{ },{ },{ }])

```

**Etape 6** : Vérifier l'insertion des documents

Pour vérifier que les documents ont été insérés correctement, utilisez la commande suivante pour afficher tous les documents dans la collection :

```
db.ma_collection.find().pretty()
```

## Structure de l'Application

L'application est structurée en trois modules principaux :

**fichierModule** ,
**questionModule**,
**reponseModule**.

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
