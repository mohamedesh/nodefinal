import User from "../models/User.js";
import bcrypt from "bcrypt"
import Ressource from "../models/Ressource.js";

const createUser = async (surname, name, pseudo, password, email) => {
    let result = null;
    let error = `user not find `;
    try {

        const pass = await bcrypt.hash(password, 10)
        console.log(pass)
        const user = await User.create({
            surname,
            name,
            pseudo,
            password: pass,
            email,
        })
        result = user ? user : null;
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
    readAll
}
