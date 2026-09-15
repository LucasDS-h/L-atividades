const express = require("express");

const pedidos = require("../dados.json");

const mostrarPedidos = (req, res) => {
    res.send(pedidos);
}

const novoPedido = (req, res) => {
    if(req.body){
        res.send("Pedido recebido, em analise");

        pedidos.push(req.body);
    } else {
        res.send("Erro ao receber pedido");
    }
}

const calcularSubtotais = () => {
    pedidos.forEach( p => {
        p.subtotal = p.precoUnitario * p.quantidade
    });
}

const app = express();

app.use(express.urlencoded({extended:true}));

const porta = 3000;

app.get("/", mostrarPedidos);
app.post("/", novoPedido);

app.listen(porta, () => {
    console.log(`cliente: http://localhost:5500/cliente/`)
    console.log(`servidor : http://localhost:${porta}`)
});