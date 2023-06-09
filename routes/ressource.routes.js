import {Router} from "express"
import {jwtMiddleware} from "../middleware/jwt.middleware.js";
import {RessourceController} from "../controllers/ressource.controller.js";

const initRessourceRoutes = (app) => {
    const router = Router();
    router.get("/displayAll/:userId", jwtMiddleware, RessourceController.displayRessourceByUserId);
    router.get("/displayDiscovery", RessourceController.displayRessourceWithCategorieDiscovery)
    router.get("/categorie/:id", RessourceController.displayRessourceByCategorieId)
    router.post("/create", jwtMiddleware, RessourceController.create);
    router.put("/update/:id", jwtMiddleware, RessourceController.update);
    router.delete("/delete/:id", jwtMiddleware, RessourceController.deleteRessource);


    app.use("/ressource", router);
}

export default initRessourceRoutes