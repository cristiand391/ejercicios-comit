/*
Como el ejercicio anterior, solo que ahora debe responder con un JSON { "respuesta": "mundo" }. 
Usar la función JSON.stringify(objeto) para enviar la respuesta como texto.
*/

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/hola") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ respuesta: "mundo" }));
  } else {
    res.statusCode = 404;
    res.end("Error: endpoint no encontrado\n");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://127.0.0.1:3000");
});
