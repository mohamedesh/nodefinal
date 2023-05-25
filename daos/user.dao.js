import User from "../models/User.js";
import bcrypt from "bcrypt"
import Ressource from "../models/Ressource.js";
import Note from "../models/Note.js";

const createUser = async (surname, name, pseudo, password, email) => {
    let result = null;
    let error = `user not find `;
    console.log(surname, name, pseudo, email)
    console.log(password)

    try {

        const emailAdmins = [`mohamed2@gmail.com`]
        const pass = await bcrypt.hash(password, 10)
        console.log(pass)
        const user = await User.create({
            surname,
            name,
            pseudo,
            password: pass,
            email,
            private: 1,
            // condition ternaire sur le role avec la methode qui permet de savoir si à l'interieur de emailAdmin il y a un email, si c'est true il a l'id 2 si c'est false id 1
            roleId: emailAdmins.includes(email) ? 2 : 1
        })

        // si user existe renvoie user sinon null
        result = user ? user : null;
        // si user existe renvoie null sinon error
        error = user ? null : error

    } catch (e) {
        console.error("erreur ici")
        error = e.message
    }

    return {result, error}
}

const readUserEmail = async (email, userId) => {
    try {
        const user = await User.findOne(
            {
                include: [{
                    model: Ressource,
                    where: userId
                }],
                where: {email: email}
            })
        console.log(user)
        return user;
    } catch (e) {
        console.log(e.message)
        return null;
    }
}

const updateUser = async (pseudo, password, email, id) => {

    try {
        const user = await User.findByPk(id)
        const passwordHash = await bcrypt.hash(password, 10)
        const userUpdate = await user.update({
            pseudo,
            password: passwordHash,
            email
        })
        return userUpdate
    } catch (error) {
        console.error(error.message)
    }
}


const deleteUser = (id) => {
    User.findByPk(id)
        .then(user => {
            user.destroy()
        })
}

const readByPk = async (userId) => {
    try {
        // const user_id = await User.findByPk(id)
        console.log(userId)
        // le findBypk attend 2 paramaetre l'id du user et les options qui l'accompagne
        const user = await User.findByPk(
            userId,
            {
                include: [{
                    model: Ressource
                }, {
                    model: Note
                }]
            }
        );
        return user
    } catch (e) {
        console.error(e.message)
        return null;
    }
}

const readAll = async () => {
    try {
        const user = await User.findAll();
        return user
    } catch (e) {
        console.error(e.message)
        return null
    }
}

export const UserDao = {
    createUser,
    readUserEmail,
    updateUser,
    deleteUser,
    readByPk,
    readAll
}
