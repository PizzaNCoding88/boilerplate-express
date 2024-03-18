let express = require('express');
const res = require('express/lib/response');
const { userPassedConsoleChallenge } = require('fcc-express-bground/globals');
let app = express();

app.get("/", (req,res) =>{
    res.send("Hello Express");
})


































 module.exports = app;
 console.log("Hello World");