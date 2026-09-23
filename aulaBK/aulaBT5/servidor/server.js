const express = require("express")
const Item = require("../dados.json")


const mostrarItem = (req, res) => {
    res.send(Item)

}

const mostrarItemId = (req, res) => {
    const id = req.params.id;
    const itemEncontrado = Item.find((items) => items.id == id)

    if (!itemEncontrado) {
        return res.send(404).send("Item não encontrado frango")
    }

    req.send(itemEncontrado)

}


const NovoItem = (req, res) => {
    if (req.body) {
        res.send("Item recebido papa frita")
        Item.push(req.body)
    } else {
        res.send("ERRO seu filho do paraguay")
    }
}


const alterarItem = (req, res) => {
    const id = req.params.id
    const dados = req.body

    Item.forEach((Items) => {
        if(Items.id == id) {
            Items.item = dados.item
            Items.local = dados.local
            Items.dataRegistro = dados.dataRegistro
            Items.valor = dados.valor
            Items.patrimonio = dados.patrimonio
        }
    })
    res.send("toma seu items atualizados paco")
}


const deletarItem = (req, res) => {
    const id = req.params.id

    Item.forEach((Items, indice) => {
        if(Items.id == id){
            Item.splice(indice, 1)
        }
    })

    res.send("Item eliminado da paz da terra")
}

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
const porta = 3000

app.get("/", mostrarItem)
app.post("/", NovoItem)
app.put("/:id", alterarItem)
app.delete("/:id", deletarItem)

app.listen(porta, () => {
    console.log(`Servidor: http://localhost:${porta}`)
})