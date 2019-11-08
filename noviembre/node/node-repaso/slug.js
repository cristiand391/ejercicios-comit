/*
Crear el programa "slug.js" que reciba un texto como parámetro y reemplace del texto todos los:

    espacios por guiones medios ("el profesor de node" -> "el-profesor-de-node").
    mayúsculas por minúsculas ("NoRmaN" -> "norman"`).
    vocales con acéntos por vocales sin acéntos ("canción" -> "cancion").

*/

let texto = process.argv[2];

/* const tilde = [225, 233, 237, 243, 250];
const sinTilde = [97, 101, 105, 111, 117]; */

texto = texto
  .replace(/ /g, "-")
  .toLowerCase()
  .replace(/á/g, "a")
  .replace(/é/g, "e")
  .replace(/í/g, "i")
  .replace(/ó/g, "o")
  .replace(/ú/g, "u");

/* for (let i = 0; i < texto.length; i++) {
  for (let x = 0; x < 5; x++) {
    if (texto.charCodeAt(i) == tilde[x]) {
      texto[i] = String.fromCharCode(sinTilde[x]);
    }
  }
} */

console.log(texto);
