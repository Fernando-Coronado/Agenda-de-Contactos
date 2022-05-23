require("dotenv").config();
const express = require("express");
const {conectar,agregarContactos} = require("./src/mysql.js");


const app = express();

app.listen(process.env.PORT,()=>{
    console.log(`aplicacion corriendo en el puerto:${process.env.PORT}`);
});

//configuracion de las vistas
app.set("views","./vistas");
app.set("view engine","ejs");

//configuracion de archivos estaticos

app.use(express.static("./vistas"));
app.use(express.static("./src"));
app.use(express.static("./css"));



app.get("/",(req,res)=>{
    conectar();
    res.render("index",{titulo:"Aplicacion de Contactos",h1:"Aqui estarán tu lista de contactos"});
});

app.get("/agregar/:nombre/:numero",(req,res)=>{
    let nombre = req.params.nombre;
    let numero = req.params.numero;
    agregarContactos(nombre,numero);
    res.redirect("/");
});