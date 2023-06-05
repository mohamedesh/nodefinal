import {DataTypes} from "sequelize"
import connection from "../config/db.js";

const Note = connection.db.define("Note", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    contain: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
})

console.log(Note === connection.db.models.Note)
export default Note