import Categorie from "../models/Categorie.js";
import Ressource from "../models/Ressource.js";


const displayCategorie = async () => {
    try {
        const display = await Categorie.findAll()
        return display
    } catch (e) {
        console.error(e.message)
    }
}

// const displayCategorieWithRessource = async (userId) => {
//
//     try {
//         const display = await Categorie.findAll(
//             {
//                 include: [{
//                     model: Ressource,
//                     where: {userId: userId}
//                 }]
//             }
//         )
//         return display
//     } catch (e) {
//         console.error(e.message)
//     }
//
// }

export const categorieDao = {
    displayCategorie,
    // displayCategorieWithRessource
}
