/*
Siguiendo nuevamente con lo anterior, pero ahora vamos a aceptar el método POST
a nuestro endpoint /emoji. Cuando obtengamos un POST tendremos que agregar a la
lista de emojis el que nos hayan pasado en el body de la conexión.

El servidor deberá seguir funcionando como antes para los métodos GET a /emoji.
*/

const http = require("http");
const url = require("url");

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

function obtenerEmoji(indice) {
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
    if (req.method === "GET") {
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
    }
    if (req.method === "POST") {
      let rawData = "";

      req.on("data", chunk => {
        rawData += chunk;
      });
      req.on("end", () => {
        emojis.push(rawData);
      });

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Emoji agregado :)");
    }
  } else {
    res.statusCode = 404;
    res.end("Error: endpoint no encontrado\n");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://127.0.0.1:3000");
});
