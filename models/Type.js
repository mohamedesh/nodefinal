const {DataTypes} = require("sequelize")
const db = require("../db/db")
const Categorie = require("./Categorie")

const Type = db.define("Type",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

Type.hasMany(Categorie,{
    foreignKey:{
        allowNull:false,
        name:"typeId"
    },
    sourceKey:"id"
})

module.exports = Type