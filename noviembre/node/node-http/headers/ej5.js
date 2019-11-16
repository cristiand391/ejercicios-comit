/*
Siguiendo con el ejercicio anterior, ahora queremos que según el header que nos
llegue de la conexión llamado accept, el cual puede ser text/plain, text/html o application/json,
responder con el formato adecuado y agregando como header de respuesta 'Content-Type': 'text/plain',
poniendo el tipo de contenido adecuado. Las respuestas podrán ser las siguientes:

'{"emoji": "[emoji aleatorio]"}' para application/json.
'[emoji aleatorio]' para text/plain.
'<h1 style="text-align:center;">[emoji aleatorio]</h1>' para text/html.

Si no se especifica el header accept, se deberá responder con application/json.
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
    const headerAccept =
      req.headers.accept === "" ? "application/json" : req.headers.accept;

    let emoji = "";

    if (headerAccept === "application/json") {
      emoji += JSON.stringify({
        emoji: obtenerEmoji(indice)
      });
    }
    if (headerAccept === "text/plain") {
      emoji += obtenerEmoji(indice);
    }

    if (headerAccept === "text/html") {
      emoji += `<h1 style="text-align:center;">${obtenerEmoji(indice)}</h1>`;
    }
    res.writeHead(200, { "Content-Type": headerAccept });
    res.end(emoji);
  } else {
    res.statusCode = 404;
    res.end("Error: endpoint no encontrado\n");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://127.0.0.1:3000");
});
