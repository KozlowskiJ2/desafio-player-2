const yup = require('yup');
const bcrypt = require('bcrypt');
const knex = require('../../conexao');
const { pt } = require('yup-locales');
const { setLocale } = require('yup');
setLocale(pt);


const cadastroUsuario = async (req,res) => {
    const schema = yup.object().shape({
        nome: yup.string().required(),
        email: yup.string().email().required(),
        senha: yup.string().required()
      });
    
    const usuario = req.body;

    try {
        await schema.validate(usuario);

        const verificaEmail = await knex('usuario').where('email', usuario.email).debug();

        if (verificaEmail.length) {
            return res.status(400).json('O email informado já possui cadastro.');
          }
        
        const { senha: senhaAntiga, ...resto } = usuario;
        const senha = await bcrypt.hash(senhaAntiga, 10);
        const novoUsuario = { ...resto, senha };
        const adicionaUsuario = await knex('usuario').insert(novoUsuario).debug();

        if (!adicionaUsuario.length) {
            return res
              .status(400)
              .json('Não foi possível realizar o cadastro do usuario.');
          }
      
        return res.status(200).json('Usuario cadastrado com sucesso');
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = cadastroUsuario;