const express = require('express');
const mysql = require('mysql2');

console.log('byes')

const port = 3000;
const app = express();

app.set("view engine", "pug");


console.log(process.env.NODE_ENV);


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST || "localhost",
    user: "user",
    password: "password",
    database: "world",
});

app.get("/", (req, res) => {
    res.render("index");
});


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get("/cities", async (req, res) => {
    const [rows, fields] = await db.execute("SELECT * FROM `city`")
        return res.send(rows)
});

app.listen(port, () => {
    console.log('server running');
});