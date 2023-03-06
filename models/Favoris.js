const {DataTypes} = require("sequelize")
const db = require("../db/db")

const Favoris = db.define("Favoris",{
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

module.exports = Favoris