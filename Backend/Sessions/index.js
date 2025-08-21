const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const users = require("./router/users");
const posts = require("./router/posts");
const cookieParser = require("cookie-parser");
const path = require("path");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const sessionOption = {
  secret: "sessionsecret",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOption));
app.use(flash());

app.get("/reqcount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`You sent a request ${req.session.count} times `);
});

app.get("/tests", (req, res) => {
  res.send("Session variable set");
});


// flash using req.locals Middleware
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

// using req.session we can store and access value of another route link
app.get("/register", (req, res) => {
    let { name = "anynomus" } = req.query;
    req.session.name = name;
    // Flash Message with the Help of Sessions
    if(req.session.name==="anynomus"){
      req.flash("error", "Registration failed");
    } else {
      req.flash("success", "Registration successful");
    }
    res.redirect("/hello");
});
app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
});


app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("I am Root");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
