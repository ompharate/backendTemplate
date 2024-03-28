const express = require("express")
const path = require("path")
const app = express();

const PORT = 8001;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})
