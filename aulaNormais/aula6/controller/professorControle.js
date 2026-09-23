function listarprofessores(req, res){

    const professores = [
        {
            id: 1,
            nome: "luisty"
        },
        {
            id: 2,
            nome: "Reenye"
        },
        {
            id: 3,
            nome: "jonsen"
        },
        {
            id: 4,
            nome: "wellingtomas"
        },
        {
            id: 5,
            nome: "Robin"
        }
    ];
    res.json(professores);

}

module.exports = {
    listarprofessores
}