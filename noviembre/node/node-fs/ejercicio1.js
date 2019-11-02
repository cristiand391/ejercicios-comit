// Crear un programa que muestre los archivos y directorios donde está contenido.

let fs = require('fs');

console.log(fs.readdirSync('.'));