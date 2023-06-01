import {categorieDao} from "../daos/categorie.dao.js";

const displayAll = async (req, res) => {
    const categorie = await categorieDao.displayCategorie()
    if (!categorie) return res.status(400).json({message: `pas de categorie à l'affichage`})
    res.status(200).json({message: `les categories ont bien afficher`, categorie})
}

// const displayCategorieWithRessource = async (req, res) => {
//     const {userId} = req.params
//     const categorie = await categorieDao.displayCategorieWithRessource(userId)
//     if (!categorie) return res.status(400).json({message: `les ressources de la categorie ne sont pas affichée`})
//     res.status(200).json({message: `les ressources de la categorie ont bien afficher`, categorie})
//
// }

export const CategorieController = {
    displayAll,
    // displayCategorieWithRessource
}
