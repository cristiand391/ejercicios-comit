/*
Crear un programa que cree un archivo "config.json", que contenga como contenido:

  {
    "titulo": "El gran título",
    "subtitulo": "Un subtítulo",
    "descripcion": "Una descripción larga que no se me ocurre que poner, tururu ru ru ru"
  }
*/

let fs = require('fs')

fs.writeFileSync('config.json',
`{
  "titulo": "El gran título",
  "subtitulo": "Un subtítulo",
  "descripcion": "Una descripción larga que no se me ocurre que poner, tururu ru ru ru"
}`)