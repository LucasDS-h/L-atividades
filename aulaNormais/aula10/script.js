const formProduto = document.getElementById("formProduto");
const precoCusto = document.getElementById("precoCusto");
const precoVenda = document.getElementById("precoVenda");
const margemLucro = document.getElementById("margemLucro");
const mensagemProduto = document.getElementById("mensagemProduto");

function calcularMargem(){
    const custo = Number(precoCusto.value);
    const venda = Number(precoVenda.value);

    if (precoCusto.value === "" ||
        precoCusto.value === "" ||
        custo <= 0 || 
        venda < 0 ) {
            margemLucro.value = "-";
            return;
        }

        const margem = ((venda - custo) / custo) * 100;

        margemLucro.value = margem.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + "%";

}

precoCusto.addEventListener("input", calcularMargem)
precoVenda.addEventListener("input", calcularMargem)

formProduto.addEventListener("reset", function () {
    setTimeout(() => {
        margemLucro.value = "0,00%"
        mensagemProduto.textContent = "";
    }, 0)
})

formProduto.addEventListener("submit", function(event) {
    event.preventDefault();

    const codigo = document.getElementById("codigoBarras").value.trim();
    const descricao = document.getElementById("descricaoProduto").value.trim();
    const custo = Number(precoCusto.value);
    const venda = Number(precoVenda.value);
    const unidade = document.querySelector('input[name=unidade]:checked');

    if(!/^\d+$/.test(codigo)){
        mensagemProduto.textContent = "Informe um codigo valido";
        return;
    }

    if(!descricao || !Number.isFinite(custo) || 
       !Number.isFinite(venda) || custo <= 0 || venda <= 0){
           mensagemProduto.textContent - "Preencha a descrição e informe preços maiores que zero"

            return;
    }

    if(!unidade) {
        mensagemProduto.textContent = "Selecione uma unidade"
        return;
    }

    let produtos;

    try {
        produtos = JSON.parse(localStorage.getItem("produtos") || "[]")

        if(Array.isArray(produtos)){
            produtos = []
        }
    } catch {
        produtos = []
    }

    if(produtos.some( p => 
        String(p.codigoBarras) === codigo
    )) {
        mensagemProduto = this.textContent =
        "Ja existe um produto com esse codigo de barras";
        return;
    }

    const margem = ((venda - custo) / custo) * 100;

    const produto = {
        codigoBarras : codigo,
        descricaoProduto : descricao,
        precoCusto : custo,
        precoVenda : venda,
        margem : margem,
        unidade : unidade.value
    };

    produto.push(produto)

    localStorage.setItem("produtos", JSON.stringify(produtos))

    mensagemProduto.style.color = "#15803d"
    mensagemProduto.textContent = "Produto cadastro com sucesso"

    setTimeout(() => {
        window.location.href = "produto.html"
    }, 700);
});