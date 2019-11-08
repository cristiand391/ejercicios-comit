/*
Crear un programa que obtenga un nombre por parámetro y cree una carpeta con ese nombre.
*/

const fs = require("fs");
const nombre = process.argv[2];

fs.mkdirSync(nombre);
