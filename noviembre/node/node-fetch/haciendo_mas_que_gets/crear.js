const fetch = require("node-fetch");

const token = "";

fetch("https://msn-comit.herokuapp.com/mensajes", {
  method: "POST",
  headers: {
    token: token
  },
  body: "Hola Norman! :)"
})
  .then(res => res.text())
  .then(id => console.log(`Identificador de mensaje: ${id}`));
