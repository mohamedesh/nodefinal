const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("projectfinal","root","root",{
    host:"localhost",
    port:8889,
    dialect:"mariadb"
})

sequelize.authenticate()
    .then((_)=>{console.log("authentification réussi")})
    .catch((error) => console.error(error))

sequelize.sync({force:true})
    .then((_)=>{console.log("synchronisation réussi")})
    .catch((error)=>console.error(error))

module.exports = sequelize