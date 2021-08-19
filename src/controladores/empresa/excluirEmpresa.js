const deletaEmpresa = require('../../modelos/deletarEmpresa');
const procuraEmpresa = require('../../modelos/buscaEmpresa');
const { pt } = require('yup-locales');
const { setLocale } = require('yup');
const {schemaCNPJ:schema} = require('../../modelos/modelosYup');
setLocale(pt);


const excluiEmpresa = async () => {
    const { cnpj } = req.body;
    try {
        await schema.validate(usuario);
        const verificaEmpresa = await procuraEmpresa(cnpj);
        
        if (!verificaEmpresa) {
            return res.status(400).json('O cnpj informado não possui cadastro.');
        }
        await deletaEmpresa(cnpj);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = excluiEmpresa;