function calcularIdade(dataNS){
        const nascimento = new Date(dataNS);
        const hoje = new Date();

        let idade = hoje.getFullYear() - nascimento.getFullYear();

        const aindanaoaniversario =
               hoje.getMonth() < nascimento.getMonth() ||
                (hoje.getMonth() === nascimento.getMonth() &&
                hoje.getDate() < nascimento.getDate());

            if(aindanaoaniversario){
                idade--;
            }

         return idade;

}
       console.log(calcularIdade("2009-9-5"))