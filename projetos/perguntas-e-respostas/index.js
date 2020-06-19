const express = require("express");
const app = express();

// usar EJS como renderizador de html
app.set("view engine", "ejs");
// static folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.listen(4000, () => {
  console.log("O servidor está rodando na porta 4000");
});
