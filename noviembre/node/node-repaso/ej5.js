/*
Pasar el programa anterior a un módulo. Ese módulo debería definir la función "slug" y exportarla.
La función ahora tomará el texto como parámetro de la función, y no como parámetro de ejecución del programa.
Para probar que funcione, importarla desde otro archivo y ejecutarla.
*/

function slug(texto) {
  return texto
    .replace(/ /g, "-")
    .toLowerCase()
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u");
}

module.exports = slug;
