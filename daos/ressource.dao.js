import Ressource from "../models/Ressource.js";
import categorie from "../models/Categorie.js";

const createRessource = async (title, url, categorieId, description, userId) => {
    console.log(categorieId, userId)
    try {
        const ressource = await Ressource.create({
            title,
            url,
            categorieId,
            description,
            userId: userId
        })
        return ressource
    } catch (e) {
        console.error(e.message)
        return null
    }
}

const updateRessource = async (title, url, categorieId, description, id, shareRessource) => {
    try {
        const ressourceUpdate = await Ressource.findByPk(id)
        const ressource = await ressourceUpdate.update({
            title,
            url,
            description,
            shareRessource
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

const displayRessourceByUserId = async (userId) => {
    try {
        const display = await Ressource.findAll({
            where: {userId: userId}
        })
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
    displayRessourceByUserId,
    displayByPk
}