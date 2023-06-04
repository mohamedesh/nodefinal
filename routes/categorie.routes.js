import {Router} from "express";
import {jwtMiddleware} from "../middleware/jwt.middleware.js";
import {CategorieController} from "../controllers/categorie.controller.js";

const initCategoriesRoutes = (app) => {
    const router = Router();
    router.get("/displayAll", CategorieController.displayAll);

    app.use("/categorie", router);

}

export default initCategoriesRoutes;