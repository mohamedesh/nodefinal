import {DataTypes} from "sequelize"
import connection from "../config/db.js";
import Note from "./Note.js"
import Ressource from "./Ressource.js"
import Role from "./Role.js";


const User = connection.db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pseudo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            message: "email déjà attribuer à un autre utilisateur"
        }
    },
    private: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
})

User.hasMany(Note, {
    foreignKey: {
        allowNull: false,
        name: 'userId'
    },
    sourceKey: "id"
})

User.hasMany(Ressource, {
    foreignKey: {
        allowNull: false,
        name: "userId"
    },
    sourceKey: "id"
})

User.belongsTo(Role, {
    foreignKey: {
        allowNull: false,
        name: 'roleId'
    },
    targetKey: "id"
})


export default User