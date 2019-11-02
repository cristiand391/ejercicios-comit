// Crear un programa que cree un archivo con nombre igual al que reciba como primer parámetro,
// y contenido igual al que reciba como segundo parámetro.

let fs = require('fs')

fs.writeFileSync(process.argv[2], process.argv[3]);