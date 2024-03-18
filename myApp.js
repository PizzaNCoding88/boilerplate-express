let express = require('express');
const res = require('express/lib/response');
const { userPassedConsoleChallenge } = require('fcc-express-bground/globals');
let app = express();

app.get("/", (req,res) =>{
    path = __dirname + '/views/index.html'
    res.sendFile(path);
})



let path = __dirname + '/public';

app.use(path,express.static(path));































 module.exports = app;
 console.log("Hello World");