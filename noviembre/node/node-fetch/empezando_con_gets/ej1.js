/*
Hacer un programa que obtenga una URL por parámetro cuando se ejecute,
y muestre por consola la respuesta en forma de texto.
*/

const fetch = require("node-fetch");
const url = process.argv[2];

fetch(url)
  .then(res => res.text())
  .then(text => console.log(text));
