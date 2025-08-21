const express = require("express");
const app = express();

const users = require("./router/users");
const posts = require("./router/posts");

const cookieParser = require("cookie-parser");
app.use(cookieParser("secretcode"));

app.get("/getcookies",(req, res) => {
    res.cookie("Greet", "Hello");
    res.send("Cookie has been set");
})

app.get("/greet", (req, res) => {
    let {name = "anynomus"} = req.cookies;
    res.send(`Cookie has been retrieved: ${name}`);
})

app.get("/getsignedcookies", (req, res) => {
    res.cookie("color", "blue", { signed: true });
    res.send("Signed cookie has been set");
})

app.get("/", (req,res) => {
    console.log(req.cookies);
    res.send("I am Root");
});

app.use("/users",users);
app.use("/posts",posts);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});