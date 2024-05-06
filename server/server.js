const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://eshigh23:Hello123!@cluster0.coiahht.mongodb.net/")

app.get('/getUsers', (req, res) => {
    UserModel.find()
        .then(users =>res.json(users))
        .catch(err => res.json(err))
})

app.get("/api", (req, res) => {
    res.json({"users": [ "UserOne", "UserTwo", "UserThree "]})
})

app.listen(5002, () => { console.log("Server started on port 5002")})
