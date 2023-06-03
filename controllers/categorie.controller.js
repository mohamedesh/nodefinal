import {categorieDao} from "../daos/categorie.dao.js";

const displayAll = async (req, res) => {
    const categorie = await categorieDao.displayCategorie()
    if (!categorie) return res.status(400).json({message: `pas de categorie à l'affichage`})
    res.status(200).json({message: `les categories ont bien afficher`, categorie})
}

export const CategorieController = {
    displayAll,
}
