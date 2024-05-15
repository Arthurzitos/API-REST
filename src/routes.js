const express = require('express');
const instrutores = require('./controller/instrutores');
const aulas = require('./controller/aulas.js');
const routes = express();

// Rotas referentes aos intrutores
routes.get('/instrutores', instrutores.listarInstrutores); // listar TODOS os instrutores
routes.get('/instrutores/:id', instrutores.obterInstrutores); // listar instrutor por ID
routes.post('/instrutores', instrutores.cadastrarInstrutor); // cadastrar um instrutor
routes.put('/instrutores/:id', instrutores.atualizarInstrutor); // atualizar todo o cadastro de um instrututor
routes.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor); // atualiza somente o status do instrutor
routes.delete('/instrutores/:id', instrutores.excluirInstrutor) // axclui o registro de um instrutor

// Rotas referentes as aulas
routes.post('/instrutores/:id_instrutor/aulas', aulas.cadastrarAula); // Cadastra uma nova aula para um instrutor específico.
routes.get('/aulas', aulas.listarAulas); // lista todas as aulas cadastradas
routes.get('/aulas/:id', aulas.obterAula); // lista todas as aulas cadastradas
routes.get('/instrutores/:id_instrutor/aulas', aulas.obterAulasInstrutor);


module.exports = routes;