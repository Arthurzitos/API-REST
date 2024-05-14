const express = require('express');
const routes = express();

// testando conexão com servidor
routes.get('/teste', (req, res) => {
    res.send('Servidor Funcionando!');
});

module.exports = [
    routes
];