const {DataTypes} = require("sequelize")
const db = require("../db/db")
const User = require("./User")
const Role = db.define("Role",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

Role.hasMany(User,{
    foreignKey:{
        allowNull:false,
        name:'roleId'
    },
    sourceKey:"id"
})

module.exports = Role