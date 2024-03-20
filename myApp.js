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



// app.get("/json", (req,res,next)=>{
//     let method = req.method;
//     let path = req.path;
//     let ip = req.ip;
//     console.log(method, path, ip);
//     next()
// })

app.use('/',(req,res,next)=>{
    // let method = req.method;
    // let path = req.path;
    // let ip = req.ip;
    let string = req.method + "" + req.path + "" + req.ip;
    console.log(string);
    console.log("yes");
    next();
})
























 module.exports = app;
 console.log("Hello World");