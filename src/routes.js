const express = require('express');
const instrutores = require('./controller/instrutores');
const routes = express();

routes.get('/instrutores', instrutores.listarInstrutores); // listar TODOS os instrutores
routes.get('/instrutores/:id', instrutores.obterInstrutores); // listar instrutor por ID
routes.post('/instrutores', instrutores.cadastrarInstrutor); // cadastrar um instrutor

module.exports = routes;