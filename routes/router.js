import initUsersRoutes from "./users.routes.js";
import initRessourceRoutes from "./ressource.routes.js";
import initNoteRoutes from "./note.routes.js";
import {sanitizeMiddleware} from "../middleware/sanitize.middleware.js";

const initRoutes = async (app) => {
    initUsersRoutes(app, sanitizeMiddleware)
    initRessourceRoutes(app, sanitizeMiddleware)
    initNoteRoutes(app, sanitizeMiddleware)
}

export default initRoutes;