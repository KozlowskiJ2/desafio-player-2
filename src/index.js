require('dotenv').config();
const express = require('express');
const rotasEmpresas = require('./rotas/empresas');
const rotasUsuarios = require('./rotas/usuarios');
const app = express();

app.use(express.json());

app.use(rotasUsuarios);
app.use(rotasEmpresas);

app.listen(3000);