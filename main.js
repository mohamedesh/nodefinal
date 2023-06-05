import express from "express"

const app = express();
import connection from "./config/db.js";
import Note from "./models/Note.js";
import Role from "./models/Categorie.js";
import User from "./models/User.js";
import Ressource from "./models/Ressource.js";


import initRoutes from "./routes/router.js"
import initMiddlewares from "./middleware/init.js";

const port = 3333

try {
    console.log(`connection bdd`)
    initMiddlewares(app)
    await initRoutes(app)
    await connection.sync()
} catch (e) {
    console.error(e.message)
}

app.listen(port, () => {
    console.log(`serveur en cours d'éxécution dans le port ${port}`)

})