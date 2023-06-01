import {UserDao} from "../daos/user.dao.js";
import {jwtSign} from "../utilitaire/jwt.utilitaire.js";
import {stringIsFilled} from "../utilitaire/string.utilitaire.js";
import {validateEmail, validatePassword} from "../utilitaire/regex.utilitaire.js"
import bcrypt from "bcrypt";

// controller permet avant d'envoyer ça au daos qu'il n'y est pas d'erreur
// s'enregistrer
const signUp = async (req, res) => {
    const {surname, name, pseudo, password, email} = req.body

    const response = await UserDao.createUser(surname, name, pseudo, password, email)
    if (response.error) {
        return res.status(403).json({message: response.error})
    }
    // verification regex
    const validate_email = validateEmail(email)
    const validate_password = validatePassword(password)

    if (!validate_email) {
        return res.status(400).json({message: `l'email ne contient pas les element requis`})
    }
    if (!validate_password) {
        return res.status(400).json({message: `le password ne contient pas les element requis`})
    }

    // verification du nombre de caractères
    //
    // if (name.length || surname.length || pseudo.length === 20) {
    //     return res.status(400).json({message: `votre nombre de caractères est trop élevé`})
    // }

    // verification du token
    const token = jwtSign(response.id)
    console.log(`token_signUp:${token}`)

    res.status(201).json({message: `user_created`, response: response.result})
}

// se connecter
const signIn = async (req, res) => {
    const {email, password} = req.body;
    // verification si le mail et le password sont des chaines de caractères
    if (!stringIsFilled(email) || !stringIsFilled(password)) {
        return res.status(404).json({message: `email or password incorrect`})
    }

    const user = await UserDao.readUserEmail(email);
    console.log(user)
    // les ? permettent de renvoyer null et d'arreter le code ici
    // bcrypt compare password ecrit du cote front et le password qui est enregistrer du cote bdd
    const passWordIsOk = await bcrypt.compare(password, user?.dataValues?.password)

    if (passWordIsOk) {
        console.log(user.id)
        const token = jwtSign(user.id);
        console.log(token)
        return res.status(200).json({message: `ok`, token, user})
    } else {
        return res.status(401).json({message: `login_failed`})
    }


}

//modifier un user
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

// supprimer un user
const deleteUser = async (req, res) => {
    const id = req.params.id
    const user = await UserDao.deleteUser(id)
    if (!user) {
        res.status(404).json({message: `user non trouvé`})
    }
}

// revoir cette partie
const getUserInfos = async (req, res) => {
    const {userId} = req.body;
    const user = await UserDao.readByPk(userId);
    // if (userId !== "admin") {
    //     return res.status(403).json({message: `pas d'autorisation`})
    // } else {
    //     return res.status(200).json({user});
    // }
    if (!user) return res.status(400).json({message: `can't retrieve user`});
    return res.status(200).json({user});

};

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
    getUserInfos,
    getUserAll
}

