const express = require("express");
const router = express().router ;

router.get("/", (req, res) => {
    res.send("Get Posts Root")
})

router.post("/:id", (req, res) => {
    res.send("Post Posts Root")
})

router.delete("/:id", (req, res) => {
    res.send("Delete Posts Root")
})

module.exports = router ;