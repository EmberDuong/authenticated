const app = require('express')
const userController = require('../controllers/user.controller')
const routes = app.Router()

// create user
routes.post('/user', async (req, res) => {
    const payload = req.body
    const user = await  userController.createdUser(payload)
    res.send(user)
})


module.exports = routes
