const mysql = require("mysql2");
require("dotenv").config();

const conector =mysql.createConnection({
    host:process.env.HOST_DB,
    user:process.env.USER_DB,
    password:process.env.PASSWORD_DB,
    database:process.env.NAME_DB
});

const conectar = ()=>{
    conector.connect(err=>{
        if(err){
            throw err;
        }else{
            console.log("Conectado a la base de datos!");
        }
    })
}

//agregar contactos
const agregarContactos = (nombre,numero) =>{
    const sql = `INSERT INTO contactos (id_contacto, nombre_contacto, numero_contacto) VALUES (${null},"${nombre}",${numero})`;
    conector.query(sql,(err,result,field)=>{
        if(err){
            throw err
        }
        console.log(result);
    })
}



module.exports = {
    conectar,
    agregarContactos
}