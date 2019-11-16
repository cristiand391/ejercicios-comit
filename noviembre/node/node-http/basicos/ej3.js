/*
Crear un programa que inicialice un servidor en el puerto 3000, el mismo debe responder ante el endpoint /emoji
con un emoji aleatorio en un JSON de esta forma { "emoji": "💣" }.
Para este ejercicio van a recibir una pequeña ayuda, la función para obtener un emoji aleatorio es la siguiente: 

  function obtenerEmoji(indice) {
    var emojis = ["😀", "😳", "😄", "😁", "😆", "😅", "😂", "😴", "🤭️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "🤤", "😙", "😚", "😋", "😛", "😝", "😜", "😎", "🤓", "🥳", "🤯", "😡", "😱", "🥺", "😏"]
    if (!indice) {
        var random = Math.floor(Math.random() * 33)
        return emojis[random]
    }
    return emojis[indice]
}

var emoji = obtenerEmoji()
*/

const http = require("http");

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
    var random = Math.floor(Math.random() * 33);
    return emojis[random];
  }
  return emojis[indice];
}

const server = http.createServer((req, res) => {
  if (req.url === "/emoji") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ emoji: obtenerEmoji() }));
  } else {
    res.statusCode = 404;
    res.end("Error: endpoint no encontrado\n");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://127.0.0.1:3000");
});
