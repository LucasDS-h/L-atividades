const items = require("../../dados/items.json")

function subtotais () {
    items.forEach ( p => {
        p.subtotais = p.quantidade * p.preco
    })
}

const listar = (req, res) => {
    subtotais();
    res.json(items)}

const criar = (req, res) => {
    const dados = req.body;
    dados.id = Number(items[items.length - 1].id) + 1
    items.push(dados)
    res.status(201).json(dados)
}
const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body

    const busca = items.find((dados) => dados.id == id)

    Object.keys(dados).forEach((i) => {
        busca[i] = dados[i]      
    })
    res.json("toma")
}

const excluir = (req, res) => { 
    const id = req.params.id

    items.forEach((item, indice) => {
        if(item.id == id){
            items.splice(indice, 1)
        }
    })
    res.send("poha foi que felicidade")
}

module.exports = {
    criar, listar, alterar, excluir
}