// Como el ejercicio anterior, solo que ahora debe mostrar el valor del atributo this en consola.

const http = require("http");

const url = "http://itsthisforthat.com/api.php?json";

const server = http.get(url, res => {
  let rawData = "";

  res.setEncoding("utf8");
  res.on("data", chunk => {
    rawData += chunk;
  });
  res.on("end", () => {
    rawDataObj = JSON.parse(rawData);
    console.log(`Atributo 'this': ${rawDataObj.this}\n`);
  });
});

server.on("error", e => {
  console.error(e.message);
});
