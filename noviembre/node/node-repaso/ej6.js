/*
Crear un programa que al ser ejecutado obtenga un nombre como parámetro de ejecución del programa.
El programa debe crear una carpeta con nombre igual al que haya obtenido por parámetro, PERO,
el nombre se va a modificar aplicándosele la función "slug", que deberá ser importada del módulo creado anteriormente.
*/

const fs = require("fs");
const slug = require("./ej5.js");

fs.mkdirSync(slug(process.argv[2]));
