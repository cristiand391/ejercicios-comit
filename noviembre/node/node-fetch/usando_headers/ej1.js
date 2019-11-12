/*
Hacer lo mismo que el ejercicio 2, solo que ahora se agrega el header Accept: text/plain a la consulta,
y mostrar por consola el texto entrante. Con la URL https://emoji-aleatorio.herokuapp.com/emoji.
*/

const fetch = require("node-fetch");
const url = process.argv[2];

fetch(url, {
  headers: {
    Accept: "text/plain"
  }
})
  .then(res => res.text())
  .then(text => console.log(text));
