import express from "express";
import mysql from "mysql2/promise";

const port = 3000;
const app = express();

console.log('hello')
app.set("view engine", "pug");

app.use(express.static("static"));

//console.log(process.env.NODE_ENV);

/*app.get("/", (req, res) => {
    res.render("index");
  });*/

/*const db = mysql.createConnection({
    host: process.env.DATABASE_HOST || "localhost",
    user: "user",
    password: "password",
    database: "world",
});*/

app.get("/", (req, res) => {
    res.render("index");
});

// Gallery route
app.get("/photos", (req, res) => {
    res.render("photos");
});
  
// About route
app.get("/about", (req, res) => {
    res.render("about", { title: "Boring about page" });
});


app.post('/locations/:id', async (req, res) => {
  const cityId = req.params.id;
  const { name } = req.body;
  const sql = `
    UPDATE city
    SET Name = '${name}'
    WHERE ID = '${cityId}';
  `
  await conn.execute(sql);
  return res.redirect(`/locations/${cityId}`);
})


app.get("/api/cities", async (req, res) => {
  const [rows, fields] = await db.getCities();
  return res.send(rows);
});

app.get("/api/countries", async (req, res) => {
  const countries = await db.getCountries();
  res.send(countries);
});

app.listen(port, () => {
    console.log('server running');
});