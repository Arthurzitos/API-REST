const express = require('express');
const instrutores = require('./controller/instrutores');
const routes = express();

routes.get('/instrutores', instrutores.listarInstrutores); // listar TODOS os instrutores
routes.get('/instrutores/:id', instrutores.obterInstrutores); // listar instrutor por ID
routes.post('/instrutores', instrutores.cadastrarInstrutor); // cadastrar um instrutor
routes.put('/instrutores/:id', instrutores.atualizarInstrutor); // atualizar todo o cadastro de um instrututor
routes.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor); // atualiza somente o status do instrutor

module.exports = routes;