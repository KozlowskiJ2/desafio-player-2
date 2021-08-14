const yup = require('yup');

const schemaCNPJ = yup.object().shape({
    cnpj: yup.string().length(14)
});

const schemaLogin = yup.object().shape({
    email: yup.string().email().required(),
    senha: yup.string().required()
});

const schemaCadastro = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    senha: yup.string().required()
});

module.exports = {
    schemaCNPJ,
    schemaLogin,
    schemaCadastro
}