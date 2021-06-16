const express = require('express');
const app = express();
const cors = require('cors');
const ctrl = require('./controller')

const {getHouses, deleteHouse, createHouse, updateHouse} = ctrl;

app.use(express.json());
app.use(cors());

app.get('/api/Houses', ctrl.getHouses);
app.delete('/api/houses:id', deleteHouse);
app.patch('/api/houses', updateHouse);
app.post('/api/houses', createHouse);

const SERVER_PORT=4000
app.listen(SERVER_PORT, function() {console.log(`SERVER RUNNING ON ${SERVER_PORT}`)})