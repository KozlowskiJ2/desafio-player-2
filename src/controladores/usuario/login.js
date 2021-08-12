const yup = require('yup');
const bcrypt = require('bcrypt');
const knex = require('../../conexao');
const jwt = require('jsonwebtoken');
const { pt } = require('yup-locales');
const { setLocale } = require('yup');
setLocale(pt);

const loginUsuario = async (req,res) => {
    const schema = yup.object().shape({
        email:yup.string().email().required(),
        senha:yup.string().required()
    });

    const {email,senha} = req.body;
    try {
        await schema.validate(req.body);
        
        const selecionaUsuario = await knex('usuario')
        .where('email', email);

        if(!selecionaUsuario.length){
            return res.status(400).json('Usuário ou senha inválidos');
        }
        
        const usuario = selecionaUsuario[0];
        const senhaVerificada = await bcrypt.compare(senha, usuario.senha);

        if (!senhaVerificada) {
            return res.status(400).json('Usuário ou senha inválidos!');
          }

        const token = jwt.sign({id: usuario.id}, process.env.JWT_KEY);

        return res.status(200).json(token);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = loginUsuario;