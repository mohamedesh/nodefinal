import {ressourceDao} from "../daos/ressource.dao.js";

const create = async (req, res) => {
    const {title, url, description, userId} = req.body
    const ressource = await ressourceDao.createRessource(title, url, description, userId)
    if (!ressource) {
        return res.status(403).json({message: `pas de creation`})
    }
    res.status(201).json({message: `ressoource created`, ressource})
}

const update = async (req, res) => {
    const {title, url, description} = req.body

    const id = req.params.id
    console.log(id)
    const ressource = await ressourceDao.updateRessource(title, url, description, id)
    if (!ressource) return res.status(400).json({message: `pas de ressource trouvé pour la modifier`})
    return res.status(200).json({message: `le lien a bien été modifié`, ressource})
}

const deleteRessource = async (req, res) => {
    const id = req.params.id
    const ressource = await ressourceDao.deleteRessource(id)
    if (!ressource) return res.status(400).json({message: `pas de ressource trouvé pour la supprimer`})
    res.status(200).json({message: `le lien a bien été supprimer`, ressource})
}

const displayAll = async (req, res) => {

    const ressource = await ressourceDao.displayRessource()
    if (!ressource) return res.status(400).json({message: `pas de ressource à l'affichage`})
    res.status(200).json({message: `les liens ont bien été afficher`, ressource})
}

const displayOne = async (req, res) => {
    const id = req.params.id
    const ressource = await ressourceDao.displayByPk(id)
    if (!ressource) return res.status(400).json({message: `pas de ressource à l'affichage`})
    res.status(200).json({message: `le lien a bien été affiché`, ressource})

}

export const RessourceController = {
    create,
    update,
    deleteRessource,
    displayAll,
    displayOne
}