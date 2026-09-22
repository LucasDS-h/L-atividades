function calcularPagamento(){

    let preco = document.getElementById("preco")
    let quanti = document.getElementById("quanti")
    let pagamento = document.getElementById("pagamento")

    let total = 0

     const Preco = parseFloat(preco.value)
     const quantidade = quanti.value
     const Pagamento = pagamento.value

     const subtotal = Preco * quantidade

    if (Pagamento === "pix") {
        desconto = subtotal * 0.05
    } else if (Pagamento === "dinheiro") {
        desconto = subtotal * 0.1
    }
        
    total = subtotal - desconto

    document.getElementById("Pagamentos").textContent =
    "Subtotal: " + subtotal +
    "| Desconto: " + desconto +
    "| Total: " + total 
}