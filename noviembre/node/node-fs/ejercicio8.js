/*
Crear un programa que lea el archivo index.hmtl y muestre su contenido en consola,
pero esta vez, reemplazando @titulo@ por el título que esté en el archivo "config.json",
y así con las otras variables del html.
*/

let fs = require('fs')

let config_json = require('./config.json')

let index_html = fs.readFileSync('index.html', 'utf-8')
  .replace('@titulo@', `${config_json.titulo}`)
  .replace('@titulo@', `${config_json.titulo}`)
  .replace('@subtitulo@', `${config_json.subtitulo}`)
  .replace('@descripcion@', `${config_json.descripcion}`)

console.log(index_html)