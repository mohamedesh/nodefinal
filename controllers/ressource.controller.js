import {ressourceDao} from "../daos/ressource.dao.js";

const create = async (req, res) => {
    const {title, url, categorieId, description, userId} = req.body
    const ressource = await ressourceDao.createRessource(title, url, categorieId, description, userId)
    if (!ressource) {
        return res.status(403).json({message: `pas de creation`})
    }
    res.status(201).json({message: `ressoource created`, ressource})
}

const update = async (req, res) => {
    const {title, url, categorieId, description, shareRessource} = req.body
    const id = req.params.id
    console.log(id)
    const ressource = await ressourceDao.updateRessource(title, url, categorieId, description, id, shareRessource)
    if (!ressource) return res.status(400).json({message: `pas de ressource trouvé pour la modifier`})
    return res.status(200).json({message: `la ressource a bien été modifié`, ressource})
}

const deleteRessource = async (req, res) => {
    const id = req.params.id
    const ressource = await ressourceDao.deleteRessource(id)
    if (!ressource) return res.status(400).json({message: `pas de ressource trouvé pour la supprimer`})
    res.status(200).json({message: `la ressource a bien été supprimer`, ressource})
}

const displayRessourceByUserId = async (req, res) => {
    const {userId} = req.params
    const ressource = await ressourceDao.displayRessourceByUserId(userId)
    if (!ressource) return res.status(400).json({message: `pas de ressource à l'affichage`})
    res.status(200).json({message: `les ressources ont bien été afficher`, ressource})
}

const displayRessourceWithCategorieDiscovery = async (req, res) => {
    const ressource = await ressourceDao.displayRessourceWithCategorieDiscovery()
    if (!ressource) return res.status(400).json({message: `pas de ressource publique afficher`})
    res.status(200).json({message: `les ressources publique ont bien été afficher`, ressource})
}

const displayRessourceByCategorieId = async (req, res) => {
    const {id} = req.params
    const ressource = await ressourceDao.displayRessourceByCategorieId(id)
    if (!ressource) return res.status(400).json({message: `pas de ressource publique afficher`})
    res.status(200).json({message: `les ressources publique ont bien été afficher`, ressource})
}

export const RessourceController = {
    create,
    update,
    deleteRessource,
    displayRessourceByUserId,
    displayRessourceWithCategorieDiscovery,
    displayRessourceByCategorieId
}