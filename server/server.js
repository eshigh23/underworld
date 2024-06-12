const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const bodyParser = require('body-parser');


const app = express()
app.use(cors())
app.use(express.json())

/* connect to mongo database (pw currently public lol)
"mongodb+srv://<username>:<password>@<cluster>/<dbname>" */
mongoose.connect("mongodb+srv://eshigh23:Hello123!@cluster0.coiahht.mongodb.net/Underworld")
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err));


/* define api endpoint which returns all users using mongodb .find() method
UserModel defined in 'Users.js' */
app.get('/getUsers', (req, res) => {
    UserModel.find()
        .then(users => (res.json(users)))
        .catch(err => res.json(err))
})

/* called during signup
queries database to check if username already in database */
app.post('/checkUser', async (req, res) => {
    const { username } = req.body   // extract username from request body
    try {
        const user = await UserModel.findOne({ username }) 
        if (user) {
            res.json({ success: false })
        }
        else{
            res.json({ success: true, message: "No user exists, can proceed with signup." })
        }
    } catch (e) {
        res.status(500).json({ success: false, message: "Could not query user from database for Signup" })
    }
})

app.post('/signupUser', async (req, res) => {
    const { username, password } = req.body // extract username and password from request body
    console.log("user", username)
    console.log("pw", password)
    try {
        const existingUser = await UserModel.findOne( {username })
        if (existingUser) {                 // use return res.json to make sure no further code is executed
            return res.json({ success: false, message: "Username taken, please choose another"})
        }
        const newUser = new UserModel( {username, password })   // create new user and save in database
        await newUser.save()
        res.json({ success: true, message: "Signup successful!" })
    }
    catch(e) {
        res.status(500).json({ success: false, message: "Could not create new user in database for Signup" })
    }
})

app.listen(5002, () => { console.log("Server started on port 5002")})

