import mysql from "mysql2/promise";
import express from 'express';


const app = express();
const port = 3000;

app.set("view engine", "pug");

app.use(express.static("static"));

console.log(process.env.NODE_ENV);

const db = await mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  user: "user",
  password: "world",
});  

app.get("/", (req, res)=> {
  res.send("index"); 
});

app.get("/ping", (req, res) =>{
  res.send("pong");
});

app.get("/", (req, res)=> {
  res.send("index"); 
});

app.get("/photos", (req, res) => {
  res.render("photos");
});

app.get("/about", (req, res) => {
  res.render("about", {title: "More About us" });
});

//return array of cities
app.get("/cities", async (req, res) => {
  try{
    
    const[rows, fields] = await db.execute(" select * FROM `cities` ");
    return res.render("cities", {rows, fields});
  } catch(err) {
    console.error(err);
  }    
});
// run server
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
