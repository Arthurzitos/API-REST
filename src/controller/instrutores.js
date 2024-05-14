const { instrutores } = require('../bancoDeDados.js');
let { id_instrutor } = require('../bancoDeDados.js');

const listarInstrutores = (req, res) => {
    return res.status(200).json(instrutores);
};

const obterInstrutores = (req, res) => {
    const { id } = req.params; // captura ID da rota

    const instrutor = instrutores.find( (instrutor) => {
        return instrutor.id === Number(id);
    }); // busca o instrutor com ID informado

    if (!instrutor) {
        return res.status(404).json( { message: 'Instrutor não encontrado' });
    } // retorna erro caso não exista um instrutor com o ID informado

    return res.status(200).json(instrutor); // retorna o instrutor com ID informado
};

const cadastrarInstrutor = (req, res) => {
    const { nome, email, status } = req.body; 

    if (!nome) {
        return res.status(400).json({ mensagem: 'É obrigatório informar o NOME do instrutor'});
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'É obrigatório informar o EMAIL do instrutor'});
    }

    const instrutor = {
        id: id_instrutor++,
        nome,
        email,
        status: status ?? true
    }
    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
}

module.exports = {
    listarInstrutores,
    obterInstrutores,
    cadastrarInstrutor
};