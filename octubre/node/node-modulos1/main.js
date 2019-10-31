/*
En un carpeta, definir en un archivo la función "sumar", que obtenga 2 números por
parámetro y los sume. Luego crear un archivo, el cual será ejecutado con node,
que importe la función "sumar" y la use con los 2 parámetros que recibe el programa.
*/

let sumar = require('./sumar');

let n1 = parseInt(process.argv[2]), n2 = parseInt(process.argv[3]);