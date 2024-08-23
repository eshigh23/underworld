const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    filename: String,
    path: String,
    mimetype: String,
    size: Number
}, { timestamps: true })

const FileModel = mongoose.model("files", fileSchema)

module.exports = FileModel