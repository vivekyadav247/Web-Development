const express = require("express");
const app = express();

const users = require("./router/users");
const posts = require("./router/posts");

app.use("/users",users);
app.use("/posts",posts);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});