const fetch = require("node-fetch");
const fs = require("fs");

// Guardo documentación en "docs.html"
fetch("https://msn-comit.herokuapp.com/doc", {
  headers: {
    Pastafrola: "membrillo"
  }
})
  .then(res => res.text())
  .then(body => {
    fs.writeFileSync("docs.html", body);
  });
