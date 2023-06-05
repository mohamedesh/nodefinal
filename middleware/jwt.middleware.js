import {jwtVerify} from "../utilitaire/jwt.utilitaire.js"

export const jwtMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    const userId = jwtVerify(token)
    if (!userId) return res.status(403).json({message: `unauthorized`})
    req.body = {...req.body, userId: parseInt(userId)}
    next();
}