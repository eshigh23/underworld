const mongoose = require('mongoose')

// define Schema for user model
const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Define _id field explicitly
    name: String,
    age: Number,
    GPA: Number,
})

/* define and export UserModel variable
imported in 'server.js' to define api endpoint
params: (collection name, schema) */
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel

UserModel.findOne( {age:30 })
  .then(user => console.log("Fetched user:", user))
  .catch(err => console.error("Error fetching user:", err));