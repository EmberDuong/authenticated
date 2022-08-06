const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

async function createdUser (payload) {
    const { name, username, password, email } = payload
    if ( !name || !username || !password || !email) throw Error('Invalid Data!');
    const customPassword = await bcrypt.hash(password, 10)
    const user = await userModel.create({ ...payload, password: customPassword })
    return user
}

module.exports = {
    createdUser
}
