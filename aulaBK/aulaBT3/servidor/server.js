const express = require("express")
const alunos = require("../dados.json")

const mostrarAlunos = (req, res) => {
    calcularMedia()
    res.send(alunos)
}

const novoAlunos = (req, res) => {
    if (req.body){
        res.send("Aluno batata salvo")
        alunos.push(req.body)
    } else {
        res.send("Error ao pegar a batata")
    }
}

const calcularMedia = () => {
    alunos.forEach(a =>{
        a.media = (parseFloat(a.nota1) + parseFloat(a.nota2) + parseFloat(a.nota3)) / 3
    })
}

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json() )

app.get("/", mostrarAlunos)
app.post("/", novoAlunos)
app.post("/media", calcularMedia)

app.listen(3000, () => {

    console.log(`alunos:   http://localhost:5500/alunos`)
    console.log(`servidor: http://localhost:3000`)
})