let totalCompra = 0;

function adicionarCarrinho(nome, preco){
    const lista = document.getElementById("listaCarrinho");

    const item = document.createElement("li");
    item.textContent = nome + " - R$" + preco.toFixed(2)

    lista.appendChild(item);

    totalCompra = totalCompra + preco;

    atualizarTotal();
}

function atualizarTotal(){
    const total = document.getElementById("total");

    total.textContent = "Total: R$" + totalCompra.toFixed(2);
}

function finalizarCompra(){
    if (total === 0){
        alert("Adicione uma batata ao carrinho papas!!");
    } else {
        alert("compra finalizada! R$ " + totalCompra.toFixed(2))

        document.getElementById("listaCarrinho").innerHTML = "";

        totalCompra = 0;

        atualizarTotal();
    }
}

function limparCarrinho(){
    if (totalCompra === 0){
        alert("A batata tá vazia XD");
    } else {

     document.getElementById("listaCarrinho").innerHTML = "";

     totalCompra = 0;

     atualizarTotal();
    }
}