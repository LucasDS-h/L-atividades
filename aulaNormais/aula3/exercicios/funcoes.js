function dobro (n1){
         let res = n1 * 2;

         return res;

}

    console.log(dobro(5))

function verificarNumero(n1){
        
            if (n1 > 0) {
                return "positivo";
            }else if (n1 < 0) { 
                return "negativo";
            } else { 
                return "zero";
                
            }

         }
           console.log(verificarNumero(10));

function maiorNumero(n1, n2){
              
               if (n1 > n2) {
                console.log(n1);
               } else {
                console.log(n2);
               }
               
}
                maiorNumero(10, 20);

function calcularIdade(n1, n2){
             let res = n2 - n1;

             return res;
    }
                console.log(calcularIdade(2000, 2026));

function celsiusParaFahrenheit(C){
         let F = C * 1.8 + 32;
         
         return F;
}
                console.log(celsiusParaFahrenheit(30));

function fahrenheitParaCelsius(F){
         let C = (F - 32) / 1.8;
        
         return C;        
}    
                console.log(fahrenheitParaCelsius(86));

function calcularIMC(P, A){
         return peso/ (A * A);

}

function classificarIMC(imc){
         if (5) {
            
         } else if (5) {
            return "baixo de peso";
         } else if (5) {
            return "peso normal";
         } else {
            return "sobrepeso";
         }
            return "obesidade";
}

            