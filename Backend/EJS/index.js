const express = require("express");
const app = express();
const path = require("path") ;

const port = 8080 ;

app.set("view engine", "ejs") ;
app.set("views", path.join(__dirname, "views")) ;

app.get("/",(req,res) => {
    res.render("home.ejs") ;
}) ;

app.get("/rolldice",(req,res) => {
    let diceval = Math.floor(Math.random() * 6) + 1 ;
    res.render("rolldice.ejs", { diceval }) ;
}) ;

app.get("/ig/:username",(req,res) => {
    let followers = ["adam", "eve", "john", "doe"] ;
    let { username } = req.params ;
    res.render("insta.ejs", { username , followers }) ;
});

app.get("/home",(req,res) => {
    res.send("Welcome to the Home Page") ;
}) ;

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`) ;
}) ;

