import Categorie from "../models/Categorie.js";

const displayCategorie = async () => {
    try {
        const display = await Categorie.findAll()
        return display
    } catch (e) {
        console.error(e.message)
    }
}

export const categorieDao = {
    displayCategorie,
}
