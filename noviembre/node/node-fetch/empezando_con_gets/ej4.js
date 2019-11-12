/*
Hacer un programa que obtenga una URL de una página, como https://nperrin.io,
y guarda la respuesta en un archivo llamado salida.html.
*/

const fetch = require("node-fetch");
const fs = require("fs");

const url = process.argv[2];

fetch(url)
  .then(res => res.text())
  .then(body => fs.writeFileSync("salida.html", body));
