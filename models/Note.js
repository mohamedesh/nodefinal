const {DataTypes} = require("sequelize")
const db = require("../db/db")

const Note = db.define("Note",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contain:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Note