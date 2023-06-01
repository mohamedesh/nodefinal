import initUsersRoutes from "./users.routes.js";
import initRessourceRoutes from "./ressource.routes.js";
import initNoteRoutes from "./note.routes.js";
import {sanitizeMiddleware} from "../middleware/sanitize.middleware.js";
import initCategoriesRoutes from "./categorie.routes.js";

const initRoutes = async (app) => {
    initUsersRoutes(app, sanitizeMiddleware)
    initRessourceRoutes(app, sanitizeMiddleware)
    initNoteRoutes(app, sanitizeMiddleware)
    initCategoriesRoutes(app, sanitizeMiddleware)
}

export default initRoutes;