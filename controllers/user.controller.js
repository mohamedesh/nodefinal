import {UserDao} from "../daos/user.dao.js";
import {jwtSign} from "../utilitaire/jwt.utilitaire.js";
import {stringIsFilled} from "../utilitaire/string.utilitaire.js";
import {validateEmail, validatePassword} from "../utilitaire/regex.utilitaire.js"
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
    const {surname, name, pseudo, password, email} = req.body

    const user = await UserDao.createUser(surname, name, pseudo, password, email)
    if (user.error) {
        return res.status(403).json({message: response.error})
    }

    const validate_email = validateEmail(email)
    const validate_password = validatePassword(password)

    if (!validate_email) {
        return res.status(400).json({message: `l'email ne contient pas les element requis`})
    }
    if (!validate_password) {
        return res.status(400).json({message: `le password ne contient pas les element requis`})
    }

    const token = jwtSign(user.result.id)
    res.status(201).json({message: `user_created`, response: user.result, token})
}


const signIn = async (req, res) => {
    const {email, password} = req.body;

    if (!stringIsFilled(email) || !stringIsFilled(password)) {
        return res.status(404).json({message: `email or password incorrect`})
    }
    const user = await UserDao.readUserEmail(email);
    const passWordIsOk = await bcrypt.compare(password, user?.dataValues?.password)

    if (passWordIsOk) {
        const token = jwtSign(user.id);
        return res.status(200).json({message: `ok`, token, user})
    } else {
        return res.status(401).json({message: `login_failed`})
    }
}

const update = async (req, res) => {
    const {pseudo, password, email} = req.body;
    console.log(pseudo, password, email)
    const id = req.params.id
    if (!stringIsFilled(email) || !stringIsFilled(password)) {
        return res.status(404).json({message: `email or password incorrect`})
    }
    const user = await UserDao.updateUser(pseudo, password, email, id);
    console.log(user)
    return res.status(200).json({user, message: "ça marche"})
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    const user = await UserDao.deleteUser(id)
    if (!user) {
        res.status(404).json({message: `user non trouvé`})
    }
}

const getUserAll = async (req, res) => {
    const user = await UserDao.readAll()
    if (!user) return res.status(400).json({message: `can't retrieve user`});
    return res.status(200).json({user});
}

export const UserController = {
    signIn,
    signUp,
    update,
    deleteUser,
    getUserAll
}

