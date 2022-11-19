const express = require('express')
const pendienteController=require('./Controller/pendiente.js')
//const {readPendiantes}=require('./Controller/pendientes.js')
const server = express()
//middle ware 
server.use(express.json())
//CRUD Listas de pendientes
//post create
//get read
//delete eliminar
//put modifica

server.route('/pendiente')
// .post(pendienteController.createPendiente)
.get(pendienteController.readPendiente)
// .put(pendienteController.modifyPendiente)
// .delete(pendienteController.deletePendiente);

// server.route('/pendientes')
// .get(readPendiantes)

// server.post('/pendiente', (req, res) => {
//     res.send('hola ')
// })
// server.get('/pendiente', (req, res) => {
//     res.send('hola ')
// })
// server.put('/pendiente', (req, res) => {
//     res.send('hola ')
// })
// server.delete('/pendiente', (req, res) => {
//     res.send('hola ')
// })
module.exports = server;