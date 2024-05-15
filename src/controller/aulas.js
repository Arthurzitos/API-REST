let { id_aula, aulas, instrutores } = require('../bancoDeDados.js');

const cadastrarAula = (req, res) => {
    const { id_instrutor } = req.params;
    const { titulo, descricao } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id_instrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: "O instrutor informado não existe."});
    }
    if (!titulo) {
        return res.status(400).json({ mensagem: 'É obritatório informar o TITULO da aula.' });
    }
    if (!descricao) {
        return res.status(400).json({ mensagem: 'É obritatório informar a DESCRIÇÃO da aula'});
    }
    
    const aula = {
        id: id_aula++,
        id_instrutor: Number(id_instrutor),
        titulo,
        descricao
    }

    aulas.push(aula)
    return res.status(201).json(aula);
};

const listarAulas = ((req, res) => {
    return res.status(200).json(aulas);
});

const obterAula = ((req, res) => {
    const { id } = req.params;
    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    })

    if (!aula) {
        return res.status(404).json( { mensagem: 'Aula não encontrada'});
    }

    return res.status(200).json(aula);
});

const obterAulasInstrutor = ((req, res) => {
    const { id_instrutor } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id_instrutor);
    });

    if (!instrutor) {
        return res.status(400).json({ mensagem: 'O instrutor não existe'});
    }

    const aulasEncontradas = aulas.filter((aula) => {
        return aula.id_instrutor === instrutor.id;
    });

    return res.status(200).json(aulasEncontradas);
});

module.exports = {
    cadastrarAula,
    listarAulas,
    obterAula,
    obterAulasInstrutor
};