const axios = require('axios');

const instancia = axios.create({
  baseURL:'https://brasilapi.com.br/api/cnpj/v1/'
})
module.exports = instancia;