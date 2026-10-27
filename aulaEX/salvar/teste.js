function salvar(){
    const nome = document.getElementById("nome").value;

    if(!nome){
        alert("Digite uma batata antes");
        return;
    }

    const chave = "nome_" = Date.now();

    localStorage.setItem(chave, nome);

    document.getElementById("nome").value = "";

    document.getElementById("resultado").textContent = "Nome salvo: " + nome;

    listarnomes();
}

function listarnomes(){
    const nomes = []

    for(let i = 0; localStorage.length; i++){
        const chave = localStorage.key(i)

        if(chave.startsWith("nome_")){
            nomes.push({
                chave: chave,
                valor: localStorage.getItem(chave)
            })
        }

        const resultado = document.getElementById("resultado");

        if (nomes.length === 0){
            resultado.textContent = "Nenhum nome salvo";
            return;
        }

        const titulo = document.createElement("h2");

        titulo.textContent = "Nomes salvos: " + nomes.length;

        const lista = document.createElement("ul");

        nomes.forEach(function(item){
            const li = document.createElement("li");
            li.textContent = item.valor + " ";

            const botao = document.createElement("button");
            botao.className = "apagar"
            botao.textContent = "excluir";

            botao.onclick = function() {
                localStorage.removeItem(item.chave);
                listarnomes();
            };

            li.appendChild(botao);
            lista.appendChild(li);
        });
        resultado.replaceChild(titulo, lista);
    }

function apagar(){
    const nomeProcurado = document.getElementById("nome").value.trim();
}
}