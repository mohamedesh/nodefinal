import jwt from "jsonwebtoken"
import {secret} from "../config/jwt.config.js";

const jwtOptions = {
    expiresIn: `3h`
}
export const jwtVerify = (token) => {
    try {
        const decoded = jwt.verify(token, secret)
        const userId = decoded.data;
        return userId ? userId : ""
    } catch (e) {
        console.error(e)
        return null
    }
}

export const jwtSign = (data) => jwt.sign({data}, secret, jwtOptions)