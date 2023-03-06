const {DataTypes} = require("sequelize")
const db = require("../db/db")
const Note = require("./Note")
const Ressource = require("./Ressource")
const Favoris = require("./Favoris")


const User = db.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    surname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pseudo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:{
            message:"email déjà attribuer à un autre utilisateur"
        }
    },
    image:{
        type:DataTypes.STRING,
        allowNull:true
    },
    private:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
},{
    timestamps:true,
    createdAt:'created',
    updatedAt:'updated'
})

User.hasMany(Note,{
    foreignKey:{
        allowNull:false,
        name:'userId'
    },
    sourceKey:"id"
})

User.hasMany(Favoris,{
    foreignKey:{
        allowNull:false,
        name:"userId"
    },
    sourceKey:"id"
})

User.hasMany(Ressource,{
    foreignKey:{
        allowNull:false,
        name:"userId"
        },
    sourceKey:"id"
})


module.exports = User