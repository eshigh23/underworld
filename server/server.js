const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')


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
        .then(users => (res.json(users))
        )
        .catch(err => res.json(err))
})

app.listen(5002, () => { console.log("Server started on port 5002")})

