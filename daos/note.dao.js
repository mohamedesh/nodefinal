// import du modele correspondant

import Note from "../models/Note.js";

// creation du crud

const createNote = async (title, description, contain, userId) => {
    try {
        const note = await Note.create({
            title,
            description,
            contain,
            userId: userId
        })
        return note
    } catch (e) {
        console.error(e.message)
        return null
    }
}

const updateNote = async (title, description, contain, id) => {
    try {
        const note = await Note.findByPk(id)
        const noteUpdate = note.update({
            title,
            description,
            contain
        })

        return noteUpdate
    } catch (e) {
        console.error(e.message)
        return null
    }
}

const deleteNote = async (id) => {
    try {
        const note = await Note.findByPk(id)
        const noteDelete = await note.destroy()

        return noteDelete
    } catch (e) {
        console.error(e.message)
        return null
    }
}

const displayNote = async () => {
    try {
        const note = await Note.findAll()
        return note
    } catch (e) {
        console.error(e.message)
        return null
    }
}

const displayOne = async (id) => {
    try {
        const note = await Note.findByPk(id)
        return note
    } catch (e) {
        console.error(e.message)
        return null
    }
}

export const NoteDao = {
    displayNote,
    displayOne,
    createNote,
    updateNote,
    deleteNote,
}