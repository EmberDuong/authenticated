const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')
const mongoose = require('mongoose')

const PORT = 3333
const app = express()

app.use(bodyParser.json())
app.use(userRoute)
app.use('/auth',authRoute)

app.listen(PORT, () => {
    console.log('Server listen on port ', PORT)
})

app.get('/health', (req, res) => {
    res.send({Message: "I'm here"})
})

// mongoDB
const DBConnectionString = 'mongodb://localhost:27017'
mongoose.connect(DBConnectionString).then(() => {
    console.log('Connect success at url', DBConnectionString)
}).catch(error => {
    console.log('MongoDB connection error:', error)
})