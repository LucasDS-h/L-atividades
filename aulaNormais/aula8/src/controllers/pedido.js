const pedidos = require("../../dados/pedidos.json")

function subtotais () {
    pedidos.forEach ( p => {
        p.subtotais = p.quantidade * p.preco
    })
}

const listar = (req, res) => {
    subtotais();
    res.json(pedidos)}

const criar = (req, res) => {
    const dados = req.body;
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1
    pedidos.push(dados)
    res.status(201).json(dados)
}
const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body

    pedidos.forEach((pedido) => {
        if(pedido.id == id){
            pedido.cliente_id = dados.cliente_id
            pedido.produto = dados.produto
            pedido.preco = dados.preco
            pedido.quantidade = dados.quantidade
        } else{
         res.send("pilau foca nisso")
        }
        res.send("errou")
    })
    
}

const excluir = (req, res) => { 
    const id = req.params.id

    pedidos.forEach((pedido, indice) => {
        if(pedido.id == id){
            pedidos.splice(indice, 1)
        }
    })
    res.send("poha foi que felicidade")
}

module.exports = {
    criar, listar, alterar, excluir
}