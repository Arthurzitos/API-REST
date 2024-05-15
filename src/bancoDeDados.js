const bancodedados = {
    id_instrutor: 3,
    id_aula: 2,

    instrutores: [
        {
            id: 1,
            nome: 'fulano',
            email: 'fulano@email.com',
            status: true
        },
        {
            id: 2,
            nome: 'ciclano',
            email: 'ciclano@email.com',
            status: true
        },
    ],

    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'logica de programacao',
            descricao: 'aula de logica para iniciantes em programacao'
        }
    ]
};

module.exports = bancodedados;