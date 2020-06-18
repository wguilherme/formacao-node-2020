const express = require("express");
const app = express();

app.listen(4000, function (err) {
  if (err) {
    console.log("Ocorreu um erro", err);
  } else {
    console.log("Servidor está ouvindo na porta 4000");
  }
});
