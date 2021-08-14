const mongoose = require('mongoose');
const empresaSchema = new mongoose.Schema({
    cnpj: String,
    identificador_matriz_filial: Number,
    descricao_matriz_filial: String,
    razao_social: String,
    nome_fantasia: String,
    situacao_cadastral: Number,
    descricao_situacao_cadastral: String,
    data_situacao_cadastral: String,
    motivo_situacao_cadastral: Number,
    nome_cidade_exterior: String,
    codigo_natureza_juridica: Number,
    data_inicio_atividade: String,
    cnae_fiscal: Number,
    cnae_fiscal_descricao: String,
    descricao_tipo_logradouro: String,
    logradouro: String,
    numero: String,
    complemento: String,
    bairro: String,
    cep: Number,
    uf: String,
    codigo_municipio: Number,
    municipio: String,
    ddd_telefone_1: String,
    ddd_telefone_2: Number,
    ddd_fax: String,
    qualificacao_do_responsavel: Number,
    capital_social: Number,
    porte: Number,
    descricao_porte: String,
    opcao_pelo_simples: Boolean,
    data_opcao_pelo_simples: String,
    data_exclusao_do_simples: String,
    opcao_pelo_mei: Boolean,
    situacao_especial: String,
    data_situacao_especial: String,
    cnaes_secundarios: [
        {}
    ],
    qsa: [
        {}
    ]}
)

const empresa = mongoose.model('teste', empresaSchema);

module.exports = empresa;