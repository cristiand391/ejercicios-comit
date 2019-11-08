/*
Crear un programa que obtenga la edad por parámetro cuando se ejecute,
y muestre por consola el mensaje "mayor" si la edad ingresada es >18 o menor en el caso contrario.
*/

const edad = process.argv[2];

console.log(edad > 18 ? "Mayor" : "Menor");
