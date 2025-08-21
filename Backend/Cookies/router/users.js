const express = require("express");
const router = express().router ;

router.get("/", (req, res) => {
    res.send("Get Users Root")
})

router.post("/:id", (req, res) => {
    res.send("Post Users Root")
})

router.delete("/:id", (req, res) => {
    res.send("Delete Users Root")
})

module.exports = router ;