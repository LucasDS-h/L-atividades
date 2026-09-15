const express = require("express"); 

const paciente = require("../dados.json");

const mostrarP = (req, res) => {
    calcularP()
    res.send(paciente);
}

const novoPaciente = (req, res) => {
    if (req.body) {
        res.send("Pedido recebido, em análise");
        paciente.push(req.body)
    } else {
        res.send("Erro ao receber pedido");
    }
}

const calcularP = () => {
    paciente.forEach( p => {
        p.IMC = p.peso / (p.altura * p.altura);
    });
};

const app = express();

app.use(express.urlencoded({ extended: true }));

const porta = 3000 ;

app.post("/", novoPaciente);
app.get("/", mostrarP);

app.listen(porta, () => {
    console.log(`consultas: http://localhost:5500/consultas`);
    console.log(`servidor : http://localhost:${porta}`);
})