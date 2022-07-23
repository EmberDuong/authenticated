const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
       type: 'string',
       required: true,
       max: 200
    },
    username: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("User", UserSchema)
