import escape from "validator/lib/escape.js"
import {isString} from "../utilitaire/string.utilitaire.js";


const sanitize = (obj) => {
    // recup toutes les valeurs de obj
    const keys = Object.keys(obj);
    // reduce permet d'iteret toutes les valeurs est ds sortir qu'une seul
    const sanitized = keys.reduce((accumulator, key) => {
        // on prend chaque valeur individuellle que contient obj
        const value = obj[key];
        // on lui met une condition si c'est une chaine de caractère elle est nettoyer par escape, sinon elle sera envoyé t-elle qu'elle
        const escaped = isString(value) ? escape(value) : value;
        // retourne une copie de toutes les valeur cumulés et aussi chaque valeur avec le resultat de la condition
        return {...accumulator, [key]: escaped}

    }, {})
    return {...sanitized}
}
export const sanitizeMiddleware = (req, res, next) => {
    req.body = sanitize(req.body)
    req.params = sanitize(req.params)
    next()
}
