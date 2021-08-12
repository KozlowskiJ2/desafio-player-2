const express = require('express');
const cadastro = require('../controladores/usuario/cadastroUsuario');
const login = require('../controladores/usuario/login');
const rotasUsuarios = express();

rotasUsuarios.post('/usuario',cadastro);
rotasUsuarios.post('/login',login);

module.exports = rotasUsuarios;