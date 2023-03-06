const express = require("express")
const app = express()
const db = require("./db/db")
const Role = require("./models/Role")
const User = require("./models/User")
const Type = require("./models/Type")
const Categorie = require("./models/Categorie")
const Ressource = require("./models/Ressource")
const Favoris = require("./models/Favoris")
const Note = require("./models/Note")
const port = 3333


app.listen(port,()=>{console.log(`serveur en cours d'éxécution dans le port ${port}`)})