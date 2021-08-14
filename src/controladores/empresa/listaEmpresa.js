const { procuraEmpresa } = require("../../modelos/buscaEmpresa");

const listarEmpresas = async (req, res) => {
    try {
        const busca = await procuraEmpresa();
        return res.json(busca);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = listarEmpresas;