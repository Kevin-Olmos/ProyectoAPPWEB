require('./config/conexion');
const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const routerContacto=require('./routes/rutas');
app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended:true,
  })
);

app.get('/', (req, res) => {
    res.send('Hola mi server en express :)');
});

app.listen(port, () => {
    console.log('Mi port: ' + port);
});

app.use('/api',routerContacto);