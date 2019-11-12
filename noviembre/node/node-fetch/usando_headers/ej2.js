/*
Mismo que el anterior ejercicio, solo que ahora con el header Accept: text/html,
y guardarlo en un archivo salida.html. Con la URL https://emoji-aleatorio.herokuapp.com/emoji.
*/

const fetch = require("node-fetch");
const fs = require("fs");

const url = process.argv[2];

fetch(url, {
  headers: {
    Accept: "text/html"
  }
})
  .then(res => res.text())
  .then(body => fs.writeFileSync("salida.html", body));
