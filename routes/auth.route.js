const app = require('express')
const authController = require('../controllers/auth.controller')
const routes = app.Router()

// create user
routes.post('/login', async (req, res) => {
    try {
        const payload = req.body
        const loginInfo = await  authController.login(payload)
        if ( loginInfo.accessToken )
            res.set('Authorization', `Bearer ${loginInfo.accessToken}`)
        else {
            return res.status(400).send({msg: error.message})
        }
        res.send({status: true})
    } catch (error){
        res.status(400).send({msg: error.message})
    }

})


module.exports = routes
