import {DataTypes} from "sequelize"
import connection from "../config/db.js";


const Role = connection.db.define("Role",{
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



export default Role