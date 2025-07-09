const mongoose = require("mongoose");
const Chat = require("./models/chat")

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => console.log("Error connecting to MongoDB:", err)); 

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

  const messages = [
    {
        from: "Pulkit",
        to: "Elon Musk",
        msg: "Hello, how are you?",
        created_at: new Date()
    },
    {
        from: "Elon Musk",
        to: "Pulkit",
        msg: "I'm good, thanks! How about you?",
        created_at: new Date()
    },
    {
        from: "Pulkit",
        to: "Elon Musk",
        msg: "I'm doing well too, thanks for asking!",
        created_at: new Date()
    },
    {
        from: "Elon Musk",
        to: "Pulkit",
        msg: "That's great to hear!",
        created_at: new Date()
    },
    {
        from: "Pulkit",
        to: "Elon Musk",
        msg: "What have you been up to lately?",
        created_at: new Date()
    },
    {
        from: "Elon Musk",
        to: "Pulkit",
        msg: "Not much, just working and relaxing.",
        created_at: new Date()
    },
    {
        from: "Pulkit",
        to: "Elon Musk",
        msg: "Sounds nice. Anything exciting happening?",
        created_at: new Date()
    },
    {
        from: "Elon Musk",
        to: "Pulkit",
        msg: "Not really, just the usual stuff.",
        created_at: new Date()
    },
    {
        from: "Pulkit",
        to: "Elon Musk",
        msg: "Well, let me know if anything interesting comes up!",
        created_at: new Date()
    },
    {
        from: "Elon Musk",
        to: "Pulkit",
        msg: "Sure thing! Same goes for you.",
        created_at: new Date()
    },
];

Chat.insertMany(messages)
    .then((res)=>{
        console.log("Messages inserted successfully:")
    }).catch((err)=>{
        console.log(err);
    })