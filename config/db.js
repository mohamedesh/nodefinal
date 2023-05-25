import {Sequelize} from "sequelize"
// let db = null
// const  initdb = async ()=>{
//     if(!db){
//          db = new Sequelize("projectfinal","root","root",{
//             host:"localhost",
//             port:8889,
//             dialect:"mariadb"
//         })
//         try{
//              await  db.authenticate()
//             console.log(`authentification réussite`)
//             await  db.sync({force:true})
//             console.log(`synchronisation réussi`)
//         }catch(error){
//             console.error(error.message)
//         }
//     }
//     return db;
//
// }

class Connection {
    db = null

    async connect() {
        if (!!this.db) return;

        try {
            this.db = new Sequelize("projectfinal", "root", "root", {
                host: "localhost",
                port: 8889,
                dialect: "mariadb"
            })
            await this.db.authenticate()
            console.log(`authentification réussite`)

        } catch (error) {
            console.error(error.message)
        }

    }

    async sync() {
        await this.db.sync()
        console.log(`synchronisation réussi`)
    }
}

const connection = new Connection()
await connection.connect()

export default connection;
