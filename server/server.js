const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": [ "UserOne", "UserTwo", "UserThree "]})
})

app.listen(5002, () => { console.log("Server started on port 5002")})
