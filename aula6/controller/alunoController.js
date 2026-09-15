function listarAlunos(req, res){
    
    const alunos = [
        {
            id: 1,
            nome: "João"
        },
        {
            id: 2,
            nome: "Maria"
        },
        {
            id: 3,
            nome: "Carlos"
        }
    ];

    res.json(alunos);
}

module.exports = {
    listarAlunos
};