const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.post("/location",(req,res)=>{
    console.log(res.body);
});

const port = 3000 || process.env.PORT;
app.listen(port,()=>{
    console.log(`Server aactive @ port ${port}`);
});