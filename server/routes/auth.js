import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'
import { secret } from '../config'
import { users, findUserByEmail } from '../middleware'

const app = express.Router()
const debug = new Debug('platzi-overflow:auth')

function comparePasswords(providerPassword, userPassword){
    return providerPassword === userPassword
}

app.post('/signin', (req, res, next) =>{ 
    const {email, password } = req.body  
    const user = findUserByEmail(email)


    if (!user){
        debug(`User with email ${email} not found`)
        return handlelLoginFailed(res)
    }

    if (!comparePasswords(password, user.password)){
        debug(`Passwords do not match: ${password} !== ${user.password}`)
        return handlelLoginFailed(res, `El correo y la contraseña no coinciden`)
    }

    const token = createToken(user)
    res.status(200).json({
        message: 'Login succeded',
        token,
        userID: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email

    })
})

const createToken = (user) => jwt.sign({ user }, secret, { expiresIn: 86400 })

app.post('/signup', (req, res) => {
    const { firstName, lastName, email, password } = req.body
    const user = {
        _id: +new Date(),
        firstName,
        lastName,
        email,
        password
    }
    debug(`Creating new user: ${user}`)
    users.push(user)
    const token = createToken(user)
    res.status(201).json({
        message: 'User saved',
        token,
        userId: user._id,
        firstName,
        lastName,
        email 
    })
})

function handlelLoginFailed(res, message) {
    return res.status(401).json({
        message: 'Login failed',
        error: message || 'Email and password don\'t match'
        })
}

export default app