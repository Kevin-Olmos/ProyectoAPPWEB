const mysql = require('mysql2');

// create the connection to database
const conexion = mysql.createConnection({
    "host": "localhost",
    "port": "3307",
    "user": "root",
    "password": "rootroot",
    "database": "clientes-contactos"
});

conexion.connect((err)=>{
    if(err){
        console.log('No se establecio la conexion ' + err)
    } 
    else {
        console.log('Se establecio la conexion!!')
    }
});

module.exports = conexion