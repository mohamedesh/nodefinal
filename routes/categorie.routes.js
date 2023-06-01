import {Router} from "express";
import {jwtMiddleware} from "../middleware/jwt.middleware.js";
import {CategorieController} from "../controllers/categorie.controller.js";

const initCategoriesRoutes = (app) => {
    const router = Router();
    router.get("/displayAll", CategorieController.displayAll);
    // router.get("/displayWithRessource/:userId", CategorieController.displayCategorieWithRessource);

    app.use("/categorie", router);

}

export default initCategoriesRoutes;