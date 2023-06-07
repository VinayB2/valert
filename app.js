const express = require("express");
const ejs = require("ejs");
const bodyParser = require
("body-parser");
const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
let location = "";
app.get("/",(req,res)=>{
    res.render("index",{link : location});
});
app.post("/location",(req,res)=>{
    location = req.body.location;
    res.redirect("/");
});

const port = 3000 || process.env.PORT;
app.listen(port,()=>{
    console.log(`Server aactive @ port ${port}`);
});