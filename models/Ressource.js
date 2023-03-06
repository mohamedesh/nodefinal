const {DataTypes} = require("sequelize")
const db = require("../db/db")
const Favoris = require("./Favoris")

const Ressource = db.define("Ressource",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    url:{
        type:DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    private:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
})

Ressource.hasMany(Favoris,{
    foreignKey:{
        allowNull:false,
        name:"lienId"
    },
    sourceKey:"id"
})

module.exports = Ressource