const express = require("express");
const app = express();

//rotas

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/cursos/curso3", (req, res) => {
  res.send("Curso 3");
});

app.get("/reduced", (req, res) => res.send("reduced method"));

app.listen(4000, function (err) {
  if (err) {
    console.log("Ocorreu um erro", err);
  } else {
    console.log("Servidor está ouvindo na porta 4000");
  }
});
