import {DataTypes} from "sequelize"
import connection from "../config/db.js";


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
    private: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})


export default Ressource