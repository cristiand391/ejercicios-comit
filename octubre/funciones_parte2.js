// 1.Guardar en una variable llamada "sig", que tenga como valor la función siguiente. Usarla después.

let sig = function (n) {
  return n + 1;
};

console.log(sig(77));


// 2.Crear una variable llamada "log", que tenga como valor la función console.log. Usarla después.

let log = function (p) {
  return console.log(p);
}

log("mensaje1");


// 3.Crear un objeto "consola", que tenga un atributo con valor console.log. Usarla después.

let consola = {
  log: function (p) {
    return console.log(p);
  }
}

consola.log("mensaje2")


// 4.Crear una función llamada "ejecutar" que reciba por parámetro una función y la ejecute.

function ejecutar(f) {
  return f;
}

ejecutar(consola.log("mensaje3"))


// 5.Crear una función llamada "operar", que reciba 1 función por parámetro, y un número. La misma debe retornar el resultado de ejecutar la función recibida, pasándole el número recibido.

function operar(f, n) {
  return f(n);
}

operar(consola.log(), "mensaje4")


// 6.Crear una función "vago", que me retorne una función que cuando se llame imprima un mensaje por consola.

function vago() {
  return console.log("mensaje5")
}

vago()