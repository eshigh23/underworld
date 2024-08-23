const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const multer = require('multer')
const path = require('path')


const app = express()
app.use(cors())
app.use(express.json())

// jwt secret key- should eventually be declared in .env and .env should be added to gitignore
const secret_key = "secret"

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

// set up storage with multer library to create file path stored on server
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

// initialize multer (library for easy upload storage)
const upload = multer({ storage: storage }).single('file')


// upload song endpoint, stores song in server and adds it to user database
app.post('/uploadFile', async (req, res) => {
    upload(req, res, async function(err) {

        if (err) {
            return res.status(500).send("Error uploading file")
        }

        const fileInfo = {
            filename: req.file.filename,    // fields automatically created when file is uploaded with multer
            path: req.file.path,
            mimetype: req.file.mimetype,
            size: req.file.size
        };

        try {
            const user = await UserModel.findOne({username: req.body.username});
            if (!user) {
                return res.status(400).json({status: "failure", message:"User not found"})
            }

            // save file to UserModel "file" field in database
            user.file = fileInfo;
            await user.save()
            res.status(200).json({status: "success", message: "File successfuly added to user's database."})

        }
        catch(e) {
            console.log("Database error:", e)
            res.status(500).send("Error saving file information.")
        }
        
        // res.status(200).json({
        //     message: "Success",
        //     fileName: fileInfo.filename,
        //     filePath: fileInfo.path
        // })
    })

})

/* fetch logged-in user */
app.post('/getUser', async (req, res) => {
    const { token } = req.body
    try {
        const decoded = jwt.verify(token, secret_key)
        const user = await UserModel.findOne({ _id: decoded.id })
        if (user) {
            res.json({ success: true, user: user})
        }
        else {
            res.json({ success: false })
        }
    } catch (e) {
        console.error(e)
    }
})


/* signup endpoint */
app.post('/signupUser', async (req, res) => {
    const { username, password } = req.body // extract username and password from request body
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

/* login endpoint
validates user in database, if authenticated creates jsonwebtoken for login sessions */
app.post('/loginUser', async (req, res) => {
    const { username, password } = req.body;
    console.log( username, password )
    try {
        const existingUser = await UserModel.findOne({ username })
        if (!existingUser){
            return res.json({ success: false, message: "User not found."})
        }
        else if (existingUser.password == password) {
            // user validated
            // create jwt token and send to client
            const token = jwt.sign({ id: existingUser._id }, secret_key, { expiresIn: '1w' })   // create token
            res.json({ success: true, message: "You are logged in!", token: token })    // return token back to client

        }
        else {
            return res.json({ success: false, message: "Incorrect login credentials."})
        }
    }
    catch (e) {
        console.log("Failure at ./LoginUser endpoint", e)
    }
})

app.listen(5002, () => { console.log("Server started on port 5002")})

