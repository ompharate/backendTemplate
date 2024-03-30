const express = require("express")
const path = require("path");
const connectionToDb = require("./services/connection");
const app = express();

const PORT = 8001;

connectionToDb();
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})
