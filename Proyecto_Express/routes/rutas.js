const express = require('express');
const router = express.Router();
const conexion = require('../config/conexion');

router.get('/', (req,res)=>{
    let sql = 'SELECT * FROM cliente_contactos.contactos'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
  });

  router.get('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `SELECT * FROM cliente_contactos.contactos where idcontactos= ${id}`
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
  });

  
  router.post('/', (req,res)=>{
    const {nombre, apellido_paterno, apellido_materno,
        email, no_tel, cliente_idcliente} = req.body
    let sql = `INSERT INTO cliente_contactos.contactos(nombre, apellido_paterno, apellido_materno,
        email, no_tel, cliente_idcliente) VALUES 
        ('${nombre}',
        '${apellido_paterno}',
        '${apellido_materno}',
        '${email}',
        '${no_tel}',
        ${cliente_idcliente})`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'contacto agregado'})
        }
    })
  });

  router.delete('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `delete FROM cliente_contactos.contactos where idcontactos = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'contacto eliminado'})
        }
    })
  });

  router.put('/:id', (req,res)=>{
    const {id} = req.params
    const {nombre, apellido_paterno, apellido_materno,
        email, no_tel, cliente_idcliente} = req.body
    let sql = `UPDATE
    cliente_contactos.contactos
  SET
  nombre='${nombre}',
  apellido_paterno='${apellido_paterno}',
  apellido_materno ='${apellido_materno}',
  email='${email}',
  no_tel='${no_tel}',
  cliente_idcliente=${cliente_idcliente}
  WHERE idcontactos = ${id}`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'contacto modificado'})
        }
    })
  });

module.exports = router;