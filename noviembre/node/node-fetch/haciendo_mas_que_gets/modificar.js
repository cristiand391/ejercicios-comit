const fetch = require("node-fetch");

const token = "";
const msgId = "";

fetch("https://msn-comit.herokuapp.com/mensajes", {
  method: "PATCH",
  headers: {
    token: token,
    id: msgId
  },
  body: "Mr Blue Sky"
})
  .then(res => res.text())
  .then(text => console.log(text));
