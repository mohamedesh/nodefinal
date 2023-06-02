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
            userId: userId,
            shareRessource: false

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
            categorieId,
            description,
            shareRessource
        })
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

const displayRessourceWithCategorieDiscovery = async () => {
    try {
        const display = await Ressource.findAll({
            where: {shareRessource: true}
        })
        return display
    } catch (e) {
        console.error(e.message)
    }
}


const displayRessourceByCategorieId = async (id) => {
    try {
        const display = await Ressource.findAll({
            where: {
                categorieId: id,
                shareRessource: true
            },

        })
        return display
    } catch (e) {
        console.error(e.message)
    }
}

const displayByPk = async (id) => {
    x
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
    displayByPk,
    displayRessourceWithCategorieDiscovery,
    displayRessourceByCategorieId
}