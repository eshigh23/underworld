const mongoose = require('mongoose')

// define Schema for user model
const UserSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId, // Define _id field explicitly
    username: String,
    password: String,
})

/* define and export UserModel variable
imported in 'server.js' to define api endpoint
params: (collection name, schema) */
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
