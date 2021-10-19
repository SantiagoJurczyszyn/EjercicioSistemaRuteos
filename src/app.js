const express = require ("express");
const path = require ("path");
const app = express ();

const publicPath = path.join(__dirname, "../public");
app.use (express.static(publicPath));

const rutaHome = require ("./routers/main.js");


// El use recibe un router, NO un controller.
app.use ("/", rutaHome);

app.listen (3000, ()=> {
    console.log ("Servidor funcionando en el puerto 3000");
});

