const express = require('express');
const verificador = require('../intermediarios/verificaToken');
const cadastro = require('../controladores/empresa/cadastraEmpresa');
const listarEmpresas = require('../controladores/empresa/listaEmpresa');
const excluiEmpresa = require('../controladores/empresa/excluirEmpresa');
const rotasEmpresas = express();

rotasEmpresas.use(verificador);

rotasEmpresas.post('/cadastro',cadastro);
rotasEmpresas.get('/empresas',listarEmpresas);
rotasEmpresas.delete('/empresas',excluiEmpresa);

module.exports = rotasEmpresas;