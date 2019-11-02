/*
Crear un programa que cree una carpeta con la siguiente estructura:

  titulo/
  |__ index.html
  |__ estilos.css

La carpeta deberá tener el mismo título que el que aparece en el archivo config.json.

El archivo index.html va a tener como contenido el siguiente:

  <html lang="es">
    <head>
      <title>@titulo@</title>
      <link rel="stylesheet" href="./estilos.css">
    </head>
    <body>
      <h1>@titulo@</h1>
      <h2>@subtitulo@</h2>
      <p>@descripcion@</p>
    </body>
  </html>

Pero reemplazando @titulo@ por el título del archivo config.json, y así con las otras variables que haya.

El archivo estilos.css tendrá el siguiente contenido:

  body {
      margin: 0;
      text-align: center;
      background-color: tomato;
  }

  h1 {
      background-color: #333;
      color: #fafafa;
      padding: 20px;
  }
*/

let fs = require('fs');

let config_json = require('./config.json');

let titulo = config_json.titulo;

fs.mkdirSync(titulo)

fs.writeFileSync(`${titulo}/index.html`,
`<html lang="es">
<head>
  <title>@titulo@</title>
  <link rel="stylesheet" href="./estilos.css">
</head>
<body>
  <h1>@titulo@</h1>
  <h2>@subtitulo@</h2>
  <p>@descripcion@</p>
</body>
</html>`
  .replace('@titulo@', titulo)
  .replace('@titulo@', titulo)
  .replace('@subtitulo@', `${config_json.subtitulo}`)
  .replace('@descripcion@', `${config_json.descripcion}`))

fs.writeFileSync(`${titulo}/estilos.css`,
`body {
  margin: 0;
  text-align: center;
  background-color: tomato;
}

h1 {
  background-color: #333;
  color: #fafafa;
  padding: 20px;
}`)