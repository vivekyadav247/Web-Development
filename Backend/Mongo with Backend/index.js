const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

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
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
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
app.post("/chats",(req,res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from,
        to,
        msg,
        created_at: new Date()
    });
    newChat.save()
        .then(() => {
            console.log("New chat saved successfully");
        })
        .catch((err) => {
            console.error("Error saving chat:", err);
            res.status(500).send("Internal Server Error");
        });
    res.redirect("/chats");
})

// Edit Route
app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

//Update Route
app.put("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let { msg : newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg : newMsg},
        {runValidators : true, new : true},
    );
    console.log("Updated chat:", updatedChat);
    res.redirect("/chats");
})

// Destroy Route
app.delete("/chats/:id", async (req,res) => {
    let {id} = req.params;
    await Chat.findByIdAndDelete(id);
    console.log("Chat deleted successfully");
    res.redirect("/chats");
});

app.get("/", (req,res) => {
    res.send("Root is working");
})

app.listen(8000,() => {
    console.log("Server is running on port 8000");
})