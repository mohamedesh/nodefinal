import {Router} from "express"
import {NoteController} from "../controllers/note.controller.js";
import {jwtMiddleware} from "../middleware/jwt.middleware.js";


const initNoteRoutes = (app) => {
    const router = Router();

    router.get("/displayNotes/:userId", NoteController.displayNotes);
    router.post("/createNote", jwtMiddleware, NoteController.create);
    router.put("/updateNote/:id", NoteController.update);
    router.delete("/deleteNote/:id", NoteController.deleteNote);


    app.use("/note", router);
}

export default initNoteRoutes