const fetch = require("node-fetch");

const token = "";

fetch("https://msn-comit.herokuapp.com/mensajes", {
  headers: {
    token: token
  }
})
  .then(res => res.text())
  .then(mensajes => console.log(mensajes));
