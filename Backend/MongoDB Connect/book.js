const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Error connecting to MongoDB:", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min : 1,
  },
  discount: {
    type: Number,
    default: 0,
  },
  genre : {String},
  category: {
    type: String,
    enum: ["fiction", "non-fiction", "science", "history", "fantasy"],
  },
});

const Book = mongoose.model("Book", bookSchema);

// Example of inserting a book
const book1 = new Book({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  price: 1099,
});

book1
  .save()
  .then((res) => {
    console.log("Book saved:", res);
  })
  .catch((err) => console.log("Error saving book:", err));
