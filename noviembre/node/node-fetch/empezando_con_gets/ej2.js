/*
Mismo que antes, pero en vez de texto, que muestre por consola la respuesta en forma de JSON.
*/

const fetch = require("node-fetch");
const url = process.argv[2];

fetch(url)
  .then(res => res.json())
  .then(json => console.log(json));
