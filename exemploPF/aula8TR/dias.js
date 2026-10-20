const vendasS = {
    segunda: 150,
    terça: 200,
    quarta: 100,
    quita: 300,
    sexta: 250
}

const vendasTotal = Object.values(vendasS)
console.log(vendasTotal)

let total = 0

for (let i = 0; i < vendasTotal.length; i++) {
  total += vendasTotal[i];
}

console.log(total)