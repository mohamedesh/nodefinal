const {DataTypes} = require("sequelize")
const db = require("../db/db")
const Ressource = require("./Ressource")

const Categorie = db.define("Categorie",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,

    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

Categorie.hasMany(Ressource,{
    foreignKey:{
        allowNull:false,
        name:"categorieId"
    },
    sourceKey:"id"
})


module.exports = Categorie