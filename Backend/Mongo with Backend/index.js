const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js") ;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended : true}));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => console.log("Error connecting to MongoDB:", err)); 

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

// Error Handler for async functions
function asyncWrap(fn){
    return function(req, res, next){
        fn(req, res, next).catch((err) => next(err));
    }
}

// Index Route
app.get("/chats", async (req,res) => {
    let chats = await Chat.find() ;
    res.render( "index.ejs", {chats});
})

// New Route
app.get("/chats/new",(req,res) => {
    res.render("new.ejs");
})

// Create Route
app.post("/chats",asyncWrap(async (req,res,next) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from,
        to,
        msg,
        created_at: new Date()
    });
    await newChat.save()
    res.redirect("/chats");
}));

// Show Route
app.get("/chats/:id", asyncWrap(async (req,res,next) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
        next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", {chat});
}));

// Edit Route
app.get("/chats/:id/edit", asyncWrap(async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
}));

//Update Route
app.put("/chats/:id", asyncWrap(async (req,res) => {
    let {id} = req.params;
    let { msg : newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg : newMsg},
        {runValidators : true, new : true},
    );
    console.log("Updated chat:", updatedChat);
    res.redirect("/chats");
}));

// Destroy Route
app.delete("/chats/:id", asyncWrap(async (req,res) => {
    let {id} = req.params;
    await Chat.findByIdAndDelete(id);
    console.log("Chat deleted successfully");
    res.redirect("/chats");
}));

// root route
app.get("/", (req,res) => {
    res.send("Root is working");
})

// Specific Error handler Like Mongoose databse Validation error or casterror
const handleValidationErr = (err) => {
    console.log("This was a validation error");
    res.send(err.message);
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationErr(err);
    }
    next(err);
});


// Erro Handling Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
})

app.listen(8000,() => {
    console.log("Server is running on port 8000");
})