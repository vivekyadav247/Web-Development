const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })) ; // Middleware to parse URL-encoded bodies
app.use(express.json()) ; // Middleware to parse JSON bodies

const port = 2407 ;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}) ;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/register", (req, res) => {
    let {name , email} = req.query ;
    res.send(`Welcome in Get Response <br/> Name: ${name}, Email: ${email}`);
});

app.post("/register", (req, res) => {
    let {name , email} = req.body ;
    res.send(`Welcome in Post Response <br/> Name: ${name}, Email: ${email}`);
});