const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const helperString = require('../libs/stringHelper.lib')
const jwt = require('jsonwebtoken')

const ahihi = 'S3UzuAVT_82ko28iF!@^XpMROcLlCn'

async function login (payload) {
    const { username, password } = payload
    // Check user
    if ( !username || !password) throw Error('Invalid Data!');
    const userFound = await userModel.findOne({ username })
    if (!userFound)
        throw Error('User not found!');

    const comparePassword = await bcrypt.compare(password, userFound.password)
    if (!comparePassword)
        throw Error('Your password is not matching!');

    // Create refresh token and access Token
    const accessToken = jwt.sign({...userFound}, ahihi, { expiresIn: '1h' })
    
    const refreshToken = helperString.randomStringWithLength(25)
    // Save refreshToken
    await userModel.updateOne({_id: userFound._id}, {refreshToken})

    // Return accessToken
    return { accessToken }
}

module.exports = {
    login
}
