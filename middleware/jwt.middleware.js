import {jwtVerify} from "../utilitaire/jwt.utilitaire.js"

export const jwtMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(`token jwt: ${token}`)
    const userId = jwtVerify(token)
    console.log(`userIdjwt : ${userId}`)
    if (!userId) return res.status(403).json({message: `unauthorized`})
    // remplacement de la requete de base par le corps de la requete + le token
    req.body = {...req.body, userId: parseInt(userId)}
    next();
}