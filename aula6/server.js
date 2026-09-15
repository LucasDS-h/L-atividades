const express = require("express");


const alunoRota = require("./routes/alunoRota");
const professorRota = require("./routes/professorRota");


const app = express();


const porta = 3000;

app.use("/alunos", alunoRota);
app.use("/professores", professorRota);

app.get("/", (req, res) => {
    
    res.send("batata server aberta");
});

app.listen(porta, () => {
    console.log("Servidor funcionando!");
});