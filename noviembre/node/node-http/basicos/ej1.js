/*
Crear un programa que inicialice un servidor en el puerto 3000, el mismo debe responder ante el endpoint /hola con el texto "mundo".
*/

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/hola") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("mundo");
  } else {
    res.statusCode = 404;
    res.end("Error: endpoint no encontrado\n");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://127.0.0.1:3000");
});
