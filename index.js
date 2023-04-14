const express = require("express");
const app = express();
const port = 3250;

app.get("/", (req, res) => {
    res.send("hello welcome to the page")
});

app.get("/ping", (req, res) => {
    res.send("pong")
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});