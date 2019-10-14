/*
1.Crear una función "decirPersonalidad", la cual reciba un objeto por parámetro y muestre por consola su atributo con nombre "personalidad".
Una vez definida la función, llamarla de 2 formas:

    definiendo un objeto llamado "persona" en una variable, y luego llamar la función "decirPersonalidad".
    llamándo directamente a la función "decirPersonalidad" definiendo un objeto en su parámetro.

*/

function decirPersonalidad(persona) {
  console.log(persona.personalidad);
}

let persona = {
  nombre: 'Martin',
  edad: 30,
  personalidad: 'alegre'
};

decirPersonalidad(persona);

decirPersonalidad({
  personalidad: 'extrovertido'
});


/*
2. Crear una función "aumentarContador", la cual aumente en 1 la variable "contador" cuando se ejecute. No hace falta definirle parámetros.
*/

function aumentarContador() {
  contador++;
}

let contador = 77;
aumentarContador(contador)
console.log(contador)


/*
3.Definir una variable llamada "variable", con valor "soy una variable". Luego, crear una función "variableParametro",
la cual tenga un parámetro con nombre "variable", la misma debe hacer console.log del parámetro cuando se ejecuta. Responder:

    Qué valor va a imprimir por consola cuando ejecuto la función "variableParametro" con el valor "soy un parametro"?

    Respuesta:
    La funcion va a imprimir "soy un parametro" porque el parámetro empieza con comillas y lo interpreta como un string.

  **************************************************************************************************************************************************************

    Qué valor va a imprimir por consola cuando ejecuto la función "variableParametro" con el valor que tenga la variable "variable"?
    
    Respuesta:
    La función va a imprimir "soy una variable" porque reemplaza la variable que se le pasó por parámetro por su valor (en este caso es "soy una variable").

  **************************************************************************************************************************************************************

    Qué valor va a imprimir por consola si vuelvo a definir la función "variableParametro" sin parámetros, y la ejecuto con el valor "soy un parametro"?
    
    Respuesta:
    La función siempre va a imprimir "soy una variable" sin importar el parámetro que se le pase.
    Al ejecutarse 'console.log(variable)' el argumento de console.log es evaluado y reemplazado por el valor de la variable de nombre "variable".
  **************************************************************************************************************************************************************

    Qué podrían hacer para no caer en confusión cuando tienen un parámetro con mismo nombre que una variable definida afuera de la función?

    Respuesta:
    Buscaria nombres más descriptivos para cada variable y/o parámetro de una función,
    porque si bien puedo agregar algo al final de un nombre para diferenciarlo de otro eso puede generar más confusión si el programa crece.
*/

let variable = 'Soy una variable';

function variableParametro(variable) {
  console.log(variable);
}

variableParametro('soy un parametro');
variableParametro(variable);