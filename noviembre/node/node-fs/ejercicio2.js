// Crear un programa que cree una carpeta con nombre igual al que reciba por parámetros.

let fs = require('fs')

fs.mkdirSync(process.argv[2])