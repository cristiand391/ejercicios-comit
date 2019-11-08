/*
Crear un programa que cuando se ejecute, obtenga el nombre que se le pasa por parámetro
y muestre por consola el mensaje "Hola [nombre]" reemplazando [nombre] por el que obtenga como primer parámetro.
*/

const nombre = process.argv[2];

console.log(`Hola ${nombre}`)