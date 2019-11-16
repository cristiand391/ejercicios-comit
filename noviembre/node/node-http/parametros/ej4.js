/*
Como el ejercicio anterior, pero ahora el endpoint recibe un parámetro opcional indice,
si este parámetro está definido, se le pasa el índice a la función emoji, de esa forma 
devuelve el emoji del índice indicado, sino, sigue funcionando como antes.
*/

const http = require("http");
const url = require("url");

function obtenerEmoji(indice) {
  var emojis = [
    "😀",
    "😳",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "😴",
    "🤭️",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "🤤",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "😎",
    "🤓",
    "🥳",
    "🤯",
    "😡",
    "😱",
    "🥺",
    "😏"
  ];
  if (!indice) {
    /* ARREGLAR:
    SI EL INDICE ES 0, AL NEGARLO QUEDA EN "TRUE" Y RETORNA EMOJI RANDOM. */
    var random = Math.floor(Math.random() * 33);
    return emojis[random];
  }
  return emojis[indice];
}

const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true);
  const indice = parseInt(urlObj.query.indice);

  if (urlObj.pathname === "/emoji") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        emoji: obtenerEmoji(indice)
      })
    );
  } else {
    res.statusCode = 404;
    res.end("Error: endpoint no encontrado\n");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://127.0.0.1:3000");
});
