import express from "express"

const app = express();
import connection from "./config/db.js";
import Note from "./models/Note.js";
import Role from "./models/Categorie.js";
import User from "./models/User.js";
import Ressource from "./models/Ressource.js";


// importation des routes et des middleswares
import initRoutes from "./routes/router.js"
import initMiddlewares from "./middleware/init.js";

const port = 3333


// envoie a routes et middlewares la const app contenant express
// puis le sync qui est là pour la synchronisation des tables ds la bdd se fait apres que sequelize est fait le tour des models on regardants lesquels sont utilisés et les crée
try {
    console.log(`connection bdd`)
    initMiddlewares(app)
    await initRoutes(app)
    await connection.sync()
} catch (e) {
    console.error(e.message)
}

// ecoute d'evenement du port
app.listen(port, () => {
    console.log(`serveur en cours d'éxécution dans le port ${port}`)

})