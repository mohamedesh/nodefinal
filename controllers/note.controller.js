import {NoteDao} from "../daos/note.dao.js";

const create = async (req, res) => {
    const {title, description, contain, userId} = req.body
    const note = await NoteDao.createNote(title, description, contain, userId)
    if (!note) {
        return res.status(403).json({message: `la note n'as pas été crée`})
    }
    res.status(201).json({message: `note_created`, note})
}

const displayNotes = async (req, res) => {
    const {userId} = req.params
    const note = await NoteDao.displayAllNotes(userId);
    if (!note) return res.status(400).json({message: `les notes ne s'affiche pas`})
    res.status(200).json({message: `note_display`, note})
}


const update = async (req, res) => {
    const {title, description, contain} = req.body
    const id = req.params.id
    const note = await NoteDao.updateNote(title, description, contain, id)
    if (!note) return res.status(400).json({message: `aucune modification possible,`})
    res.status(200).json({message: `note_update`, note})
}

const deleteNote = async (req, res) => {
    const id = req.params.id
    const note = await NoteDao.deleteNote(id)
    if (!note) return res.status(400).json({message: `suppression impossible`})
    res.status(200).json({message: `note_delete`, note})
}

export const NoteController = {
    create,
    displayNotes,
    update,
    deleteNote
}