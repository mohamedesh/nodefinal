import Ressource from "../models/Ressource.js";

const createRessource = async (title, url, description, userId) => {

    try {
        const ressource = await Ressource.create({
            title,
            url,
            description,
            private: 1,
            userId: userId
        })
        return ressource
    } catch (e) {
        console.error(e.message)
        return null
    }
}

const updateRessource = async (title, url, description, id) => {
    try {
        const ressourceUpdate = await Ressource.findByPk(id)
        const ressource = await ressourceUpdate.update({
            title,
            url,
            description
        })
        console.log(ressourceUpdate, "ressourceUpdate")
        console.log(ressource, "ressource")
        return ressource
    } catch (e) {
        console.error(e.message)
        return null
    }
}

const deleteRessource = async (id) => {
    try {
        const idRessourceDelete = await Ressource.findByPk(id)
        const idRessource = await idRessourceDelete.destroy()

        return idRessource
    } catch (e) {
        console.error(e.message)
        return null
    }
}

const displayRessource = async () => {
    try {
        const display = await Ressource.findAll()
        return display
    } catch (e) {
        console.error(e.message)
    }
}

// const displayRessourceUser = async () => {
//     try {
//
//     } catch (e) {
//         console.error(e.message)
//     }
// }

const displayByPk = async (id) => {
    try {
        const display = await Ressource.findByPk(id)
        return display
    } catch (e) {
        console.error(e.message)
        return null
    }
}

export const ressourceDao = {
    createRessource,
    updateRessource,
    deleteRessource,
    displayRessource,
    displayByPk
}