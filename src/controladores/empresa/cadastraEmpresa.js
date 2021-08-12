const knex = require('../../servicos/conexaoKnex');
const instancia = require('../../servicos/brasilAPI');
const yup = require('yup');
const { pt } = require('yup-locales');
const { setLocale } = require('yup');
setLocale(pt);

const cadastraEmpresa = async (req,res) => {
    const schema = yup.object().shape({
        cnpj: yup.string().length(14)
    });

    const { cnpj } = req.body;

    try {
        await schema.validate(req.body);
        
        const verificaCopia = await knex('empresa').where('cnpj',cnpj).debug();
        
        if (verificaCopia.length) {
            return res.status(400).json('O cnpj informado já possui cadastro.');
        }

        const {data:dadosEmpresa} = await instancia.get(cnpj);

        const nome = dadosEmpresa.nome_fantasia;
        const empresa = {
            cnpj,
            nome
        }
        const adicionaEmpresa = await knex('empresa').insert(empresa).debug();

        if (!adicionaEmpresa.length) {
            return res
                .status(400)
                .json('Não foi possível realizar o cadastro da empresa.');
        }

        return res.status(200).json('Empresa cadastrada com sucesso');


    } catch (error) {
        if(error.response.status === 404){
            res.status(404).json('Empresa não encontrada, verifique o cnpj!');
        }
        return res.status(400).json(error.message);
    }
}

module.exports = cadastraEmpresa;