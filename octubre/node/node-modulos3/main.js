/*
En una carpeta:

    crear un archivo con varias funciones
        multiplicar: multiplica 2 números que recibe por parámetros.
        restar: resta 2 números que recibe por parámetros.
        sumar: suma 2 números que recibe por parámetro.
    crear un archivo "main.js" que importe las funciones anteriores, y muestre por consola la multiplicación, resta y suma de los 2 números que reciba por parámetro el programa (3 console.log).

*/

let sumar = require('./sumar')
let restar = require('./restar')
let multiplicar = require('./multiplicar')

let n1 = parseInt(process.argv[2]), n2 = parseInt(process.argv[3]);


console.log(`Multiplicación: ${multiplicar(n1, n2)}`)
console.log(`Resta: ${restar(n1, n2)}`)
console.log(`Suma: ${sumar(n1, n2)}`)