const conectaDB = require('../servicos/db');
const empresa = require('./empresaSchema');

const deletaEmpresa = async (cnpj) => {
    try {
        await conectaDB();
        await empresa.deleteOne({ 'cnpj':cnpj });

        return true;

    } catch (error) {
        return error
    }
}

    module.exports = {
        deletaEmpresa
    }