import {DataTypes} from "sequelize"
import connection from "../config/db.js";
import Categorie from "./Categorie.js";

const Ressource = connection.db.define("Ressource", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    shareRessource: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
})
//
// Ressource.belongsTo(Categorie, {
//     foreignKey: {
//         allowNull: false,
//         name: "CategorieId"
//     }
// })
//
// Ressource.hasOne(Categorie, {
//     foreignKey: {
//         allowNull: false,
//         name: "CategorieId"
//     }
// })
export default Ressource