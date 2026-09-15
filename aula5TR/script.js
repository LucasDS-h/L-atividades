const nome = document.getElementById("nome");

const nota1 = document.getElementById("nota1");

const nota2 = document.getElementById("nota2");

const nota3 = document.getElementById("nota3");


const calcularMedia = document.getElementById("calcularMedia");
const limpar = document.getElementById("limpar")

const NomeR = document.getElementById("NomeR");

const MediaR = document.getElementById("MediaR");

const situacaoR = document.getElementById("situacaoR");

let situacao;
let notaFinal;

calcularMedia.addEventListener("click", function(){
    
    const nomeAluno = nome.value;

    const prnota = parseFloat(nota1.value);
    
    const sgnota = parseFloat(nota2.value);

    const trnota = parseFloat(nota3.value);

    if (nomeAluno === "" || isNaN(prnota) || isNaN(sgnota) || isNaN(trnota)){
        alert("completa o bagulho sua batata doce");

        return;
    }

    const notaFinal = (prnota + sgnota + trnota) / 3;

    if (notaFinal >= 7 ) {
      situacao = "aprovado"
    } else if (notaFinal < 5 ) {
      situacao = "reprovado"
    } else {
       situacao = "recuperação"
    }

    
    NomeR.textContent = `Nome: ${nome.value}`;
    MediaR.textContent = `Media: ${notaFinal}`;
    situacaoR.textContent = `Situação: ${situacao}`;

});


limpar.addEventListener("click", function(){

 nome.value = "";
 nota1.value = "";
 nota2.value = "";
 nota3.value = "";

  NomeR.textContent = "";
  MediaR.textContent = "";
  situacaoR.textContent = "";

});
