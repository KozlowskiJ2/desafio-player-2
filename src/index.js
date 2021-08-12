require('dotenv').config();
const express = require('express');
const rotasUsuarios = require('./rotas/usuarios')
const app = express();
app.use(express.json());

app.use(rotasUsuarios);
app.listen(3000);