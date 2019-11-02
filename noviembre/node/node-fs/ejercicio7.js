// Crear un programa que importe el archivo "config.json" y muestre el título por consola.

let fs = require('fs')

let config_json = require('./config.json')

console.log(config_json.titulo)