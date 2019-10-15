/*
1.Crear un objeto "programador", el cual tenga como atributos:

    nombre: texto
    quemades: número entre 0 y 10.
    energia: número entre 0 y 10..
    empleado: false
*/

let programador = {
  nombre: 'Martin',
  quemades: 1,
  energia: 10,
  empleado: false
}


/*
2.Crear una función "esProductivo", que reciba un programador y retorne:

    true cuando el quemades sea menor a energia.
    false cuando no pase lo anterior.
*/

function esProductivo(p) {
  if (p.quemades < p.energia) return true;
  return false;
}


/*
3.Crear una función "tomarCafe", la cual recibe un programador, y retorna un programador con nivel de quemadés con 2 niveles menos de los que tenía, y energia con 3 niveles más de lo que tenía.
*/

function tomarCafe(p) {
  p.quemades -= 2;
  p.energia += 3;

  return p;
}


/*
4.Crear una funcíon "programar", la cual recibe un programador y un número de horas trabajadas,
y retorna un programador con 1 nivel de energia menos por cada hora trabajada, y 2 niveles de quemades más por hora trabajada.
*/

function programar(p, hs) {
  p.energia -= hs;
  p.quemades += 2 * hs;

  return p
}


/*
5.Crear una función "dormir", la cual recibe un programador y un número de horas dormidas,
y retorna un programador con 1 nivel de energia más por hora dormida, y 2 niveles de quemades menos por hora dormida.
*/

function dormir(p, hs) {
  p.energia += hs;
  p.quemades -= 2 * hs;

  return p;
}


/*
6.Crear una función "simularDespido", que reciba un programador, y si luego de tomar cafe y dormir 2 horas no es productivo,
retorne un programador no empleado, de lo contrario retornar el mismo programador.
*/

function simularDespido(p) {
  tomarCafe(p);
  dormir(p, 2);

  if (!esProductivo(p)) {
    p.empleado = false;

    return p;
  }
  else {
    return p;
  }
}


/*
7.Crear una función "simularContratacion", que reciba un programador, y si su nivel de energia es mayor a 8,
su quemadés es menor a 2, y no es empleado, que retorne un programador empleado.
*/

function simluarContratacion(p) {
  if (!p.empleado && (p.energia > 8 && p.quemades < 2)) {
    p.empleado = true;

    return p;
  }
}


/*
8.Crear una función "accion", que reciba un programador y una función de las anteriores creadas como parámetros.
La misma debe imprimir por consola el programador, luego ejecutar la función recibida por parámetro con el programador,
y finalmente otra impresión por consola del programador.
*/

function accion(p, f) {
  console.log(p);
  console.log(f(p))   // la función pasada como segundo argumento retorna el objeto modificado asi que directamente la imprimo.
}