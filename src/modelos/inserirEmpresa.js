const conectaDB = require('../servicos/db');
const empresa = require('./empresaSchema');

const inserirEmpresa = async (dados) => {
    try {
        await conectaDB()

        const addEmpresa = await new empresa(dados).save();
        return addEmpresa;

    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = inserirEmpresa;