// 1.Definir una función llamada "siguiente", la cual retorne el siguiente (+1) de un número que obtenga por parámetros. Ejecutarla, o llamarla, con el valor: 1, 4, -2 y 0.

function siguiente(n) {
  return n + 1;
}

console.log(`Función: siguiente()

  Parámetro:  1 | Resultado: ${siguiente(1)}
  Parámetro:  4 | Resultado: ${siguiente(4)}
  Parámetro: -2 | Resultado: ${siguiente(-2)}
  Parámetro:  0 | Resultado: ${siguiente(0)}

****************************************`);


// 2.Definir una función llamada "doble", la cual retorne el doble (*2) de un número que obtenga por parámetros. Ejecutarla, o llamarla, con el valor: 1, 4, -2 y 0.

function doble(n) {
  return n * 2;
}

console.log(`Función: doble()

  Parámetro:  1 | Resultado: ${doble(1)}
  Parámetro:  4 | Resultado: ${doble(4)}
  Parámetro: -2 | Resultado: ${doble(-2)}
  Parámetro:  0 | Resultado: ${doble(0)}

****************************************`);


// 3.Definir una función que retorne el doble del siguiente de un número que obtenga por parámetros. Usar las 2 funciones anteriores. Ejecutarla, o llamarla, con el valor: 1, 4, -2 y 0.

function dobleDelSiguiente(n) {
  return doble(siguiente(n));
}

console.log(`Función: dobleDelSiguiente()

  Parámetro:  1 | Resultado: ${dobleDelSiguiente(1)}
  Parámetro:  4 | Resultado: ${dobleDelSiguiente(4)}
  Parámetro: -2 | Resultado: ${dobleDelSiguiente(-2)}
  Parámetro:  0 | Resultado: ${dobleDelSiguiente(0)}
  
****************************************`);


// 4.Definir una función llamada "suma", la cual me retorne la suma de 2 números que obtenga por parámetros. Ejecutarla con los valores: 0 y 0; 2 y 4; -1 y -1;

function suma(a, b) {
  return a + b;
}

console.log(`Función: suma()

  Parámetros:  0 y 0  | Resultado: ${suma(0, 0)}
  Parámetros:  2 y 4  | Resultado: ${suma(2, 4)}
  Parámetros: -1 y -1 | Resultado: ${suma(-1, -1)}
  
****************************************`);


// 5.Usar las funciones anteriores para obtener:

// 6.El siguiente de 4: 1+4
// 7.El doble de 10: 2*10
// 8.El siguiente del doble de 30: 1+(2*30)
// 9.La suma de 4 y 5: 4+5
// 10.El doble del siguiente del doble de 5: 2*(1+(2*5))
// 11.La suma del siguiente de 3 y 5: (1+3)+5
// 12.La suma de 4 y del siguiente del doble de 10: 4+(1+(2*10))
// 13.El siguiente de la suma del siguiente de 5 y de la suma de 3 y 4: 1+((1+5)+(3+4))

console.log(`
Usar las funciones anteriores para obtener:

  El siguiente de 4: ${siguiente(4)}
  El doble de 10: ${doble(10)}
  El siguiente del doble de 30: ${siguiente(doble(30))}
  La suma de 4 y 5: ${suma(4, 5)}
  El doble del siguiente del doble de 5: ${doble(siguiente(doble(5)))}
  La suma del siguiente de 3 y 5: ${suma(siguiente(3), 5)}
  La suma de 4 y del siguiente del doble de 10: ${suma(4, siguiente(doble(10)))}
  El siguiente de la suma del siguiente de 5 y de la suma de 3 y 4: ${siguiente(suma(siguiente(5), suma(3, 4)))}
  
**********************************************************************`);