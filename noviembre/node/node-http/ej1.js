/*Crear un programa que haga un http GET al endpoint http://itsthisforthat.com/api.php?json y mostrar la respuesta en consola.
 */

const http = require("http");

const url = "http://itsthisforthat.com/api.php?json";

const server = http.get(url, res => {
  let rawData = "";

  res.setEncoding("utf8");
  res.on("data", chunk => {
    rawData += chunk;
  });
  res.on("end", () => {
    console.log(`Respuesta: ${rawData}\n`);
  });
});

server.on("error", e => {
  console.error(e.message);
});
