const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Error connecting to MongoDB:", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userschema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userschema);

// const user1 = new User({
//     name: "John Doe",
//     email: "abc@gmail.com",
//     age : 30
// });

// user1.save();

// Inserting Multiple data
// User.insertMany([
//     { name: "Alice", email: "abc2@gmail.com", age : 25},
//     { name: "Bob", email: "abc3@gmail.com", age : 28},
//     { name: "Charlie", email: "abc4@gmail.com", age : 35}
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => console.log(err));

// Finding Data Method
// User.find({})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Finding Data with condition
// User.find({age : {$gt: 25}})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// FindOne Method
// User.findOne({age : {$gt: 25}})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// FindByID Method
// User.findById("6868092e728e1e8d693c0b6f")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Update Data Method

// UpdateOne Method
// User.updateOne({ name: "John Doe" }, { age: 26 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// UpdateMany Method
// User.updateMany({ age : {$gt : 28} }, { age: 23 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// FindAndUpdate Method
// User.findOneAndUpdate({ name: "Alice" }, { age: 27 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Delete Data Methods

// DeleteOne Method
// User.deleteOne({ name: "John Doe" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// DeleteMany Method
// User.deleteMany({ name: "John Doe" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// FindByIdAndDelete Method
// User.findByIdAndDelete("6868092e728e1e8d693c0b6f")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// FindOneAndDelete Method
User.findOneAndDelete({ name: "Alice" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
