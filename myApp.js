let express = require('express');
const res = require('express/lib/response');
const { userPassedConsoleChallenge } = require('fcc-express-bground/globals');
let app = express();

app.get("/", (req,res) =>{
    path = __dirname + '/views/index.html'
    res.sendFile(path);
})



// let path = '/public';

app.use("/public", express.static(__dirname + '/public'));































 module.exports = app;
 console.log("Hello World");