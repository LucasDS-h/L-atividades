const produtos = require("../../dados/produtos.json")

function subtotais () {
    produtos.forEach ( p => {
        p.subtotais = p.quantidade * p.preco
    })
}

const listar = (req, res) => {
    subtotais();
    res.json(produtos)}

const criar = (req, res) => {
    const dados = req.body;
    dados.id = Number(produtos[produtos.length - 1].id) + 1
    produtos.push(dados)
    res.status(201).json(dados)
}
const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body

    const busca = produtos.find((dados) => dados.id == id)

    Object.keys(dados).forEach((i) => {
        busca[i] = dados[i]      
    })
    res.json("toma")
}

const excluir = (req, res) => { 
    const id = req.params.id

    pedidos.forEach((produto, indice) => {
        if(produto.id == id){
            produtos.splice(indice, 1)
        }
    })
    res.send("poha foi que felicidade")
}

module.exports = {
    criar, listar, alterar, excluir
}