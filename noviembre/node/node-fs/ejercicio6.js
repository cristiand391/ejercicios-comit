// Crear un programa que lea un archivo, la ruta la obtendrá por parámetro, y muestre su contenido en consola.

let fs = require('fs')

let contenido = fs.readFileSync(process.argv[2], 'utf-8')

console.log(contenido)