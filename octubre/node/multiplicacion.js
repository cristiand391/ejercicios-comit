// obtenga 5 números por parámetro e imprima la multiplicación de los mismos.

let numeros = process.argv.slice(2), resultado = 1;

for (let n of numeros) {
  resultado *= parseInt(n)
}

console.log(resultado)