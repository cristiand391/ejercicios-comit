/*
Mismo que antes, pero que muestre el atributo emoji de la respuesta.
Usar esta URL para asegurarse que la respuesta tenga ese atributo:
  https://emoji-aleatorio.herokuapp.com/emoji.
*/

const fetch = require("node-fetch");
const url = process.argv[2];

fetch(url)
  .then(res => res.json())
  .then(json => console.log(json.emoji));
