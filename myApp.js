require('dotenv').config()
let express = require('express');
const res = require('express/lib/response');
const { userPassedConsoleChallenge } = require('fcc-express-bground/globals');
let app = express();

app.get("/", (req,res) =>{
    path = __dirname + '/views/index.html'
    res.sendFile(path);
})



let path = __dirname + '/public';

// app.use("/public", express.static(__dirname + "/public");
app.use('/public', express.static(path));

app.get("/json", (req,res) => {
    var style = process.env.MESSAGE_STYLE 
    if ( style === "uppercase"){
        res.json({"message" : "HELLO JSON"});
    }
    else{
        res.json({"message" : "Hello json"});
    }
    
})




























 module.exports = app;
 console.log("Hello World");