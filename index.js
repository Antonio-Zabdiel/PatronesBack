const express = require("express");

var app = express();

const PORT = process.env.PORT;

var dataBase ={
    1: {nombre: 'juan', 
        instrumento: 'guitarra'},
    2: {nombre: 'chimoltrufia',
        instrumento: 'voz'},
    3: {nombre: 'feline',
        instrumento: 'bajo'},
    4: {nombre: 'ryo',
        instrumento: 'bateria'},
    5: {nombre: 'kaori', 
        instrumento: 'pandereta'},
    6: {nombre: 'katsuki',
        instrumento: 'guitarra'},
}


//global
app.all("", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
//end of global

//test
app.get("/", (req, res, next) => {
    res.json({msg:"welcome :3"});});

app.get("/get", (req, res, next) => {
    console.log(dataBase[req.query.id])
    res.json({msg: dataBase[req.query.id]});});

app.get("/getall", (req, res, next) => {
    console.log(dataBase)
    res.json({msg: dataBase});});

//run this sheet
app.listen(PORT, () => {
  console.log("Server listening on: " + PORT);
});

