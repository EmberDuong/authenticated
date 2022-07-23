const userModel = require('../models/user.model')

async function createdUser (payload) {
    const { name, username, password, email } = payload
    if ( !name || !username || !password || !email) throw Error('Invalid Data!');
    const user = await userModel.create(payload)
    return user
}

module.exports = {
    createdUser
}
