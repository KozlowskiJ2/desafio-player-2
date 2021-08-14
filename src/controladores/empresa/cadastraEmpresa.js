
const instancia = require('../../servicos/brasilAPI');
const { procuraEmpresa } = require('../../modelos/buscaEmpresa');
const inserirEmpresa = require('../../modelos/inserirEmpresa');
const { pt } = require('yup-locales');
const { setLocale } = require('yup');
const {schemaCNPJ:schema} = require('../../modelos/modelosYup');
setLocale(pt);

const cadastraEmpresa = async (req,res) => {
    
    const { cnpj } = req.body;

    try {
        await schema.validate(req.body);
        
        const verificaCopia = await procuraEmpresa(cnpj);
        
        if (verificaCopia) {
            return res.status(400).json('O cnpj informado já possui cadastro.');
        }

        const {data:dadosEmpresa} = await instancia.get(cnpj);
        inserirEmpresa(dadosEmpresa);


        return res.status(200).json('Empresa cadastrada com sucesso');


    } catch (error) {
        if(error.response.status === 404){
            res.status(404).json('Empresa não encontrada, verifique o cnpj!');
        }
        return res.status(400).json(error.message);
    }
}

module.exports = cadastraEmpresa;