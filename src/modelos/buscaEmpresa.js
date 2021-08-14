const conectaDB = require('../servicos/db');
const empresa = require('./empresaSchema');

const procuraEmpresa = async (cnpj) => {
    try {
        await conectaDB();
        if(!cnpj){
            const lista = await empresa.find({}).exec();
            return lista
        }
        const procuraEmpresa = await empresa.findOne({ 'cnpj':cnpj }).exec();

        return procuraEmpresa;

    } catch (error) {
        return error
    }
}

    module.exports = procuraEmpresa