import {Router} from "express"
import {jwtMiddleware} from "../middleware/jwt.middleware.js";
import {UserController} from "../controllers/user.controller.js";


const initUsersRoutes = (app) => {
    const router = Router();
    router.post("/signIn", UserController.signIn);
    router.post("/signUp", UserController.signUp);
    router.put("/update/:id", jwtMiddleware, UserController.update);
    router.delete("/deleteUser/:id", jwtMiddleware, UserController.deleteUser);
    router.get("/displayAll", jwtMiddleware, UserController.getUserAll)

    app.use("/users", router);
}

export default initUsersRoutes;