const Nome = document.getElementById("nome");

const Lanche = document.getElementById("lanche");

const Quanti = document.getElementById("quantia");

const Bebida = document.getElementById("bebida");


const boton = document.getElementById("finalizar");


const clin = document.getElementById("cliente");

const totalP = document.getElementById("totalQ");

const Stotal = document.getElementById("stotal");

const Des = document.getElementById("Desconto");

const total = document.getElementById("total");

let valortotal = 0;
let valorD = 0;
let desconto = 0;

boton.addEventListener("click", function (){
    const nomecliente = Nome.value;

    const VLanche = parseInt(Lanche.value);

    const qtd = parseInt(Quanti.value);

    const Vbebida = parseInt(Bebida.value);
    
    const valorlanche = qtd * VLanche;

    valortotal = valorlanche + Vbebida;

    if (valortotal > 50) {
        desconto = valortotal * 0.10;
    }

     valorD = valortotal - desconto;

    clin.textContent = `Clientes: ${nomecliente}`;
    totalP.textContent = `Quantidade de lanches: ${qtd}`;
    Stotal.textContent = `Subtutal: R$ ${valortotal.toFixed(2)}`;
    Des.textContent = `Desconto: R$ ${desconto.toFixed(2)}`;
    total.textContent = `Total: R$ ${valorD.toFixed(2)}`;

});