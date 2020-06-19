const express = require("express");
const app = express();

// usar EJS como renderizador de html
app.set("view engine", "ejs");
// static folder
app.use(express.static("public"));

app.get("/", function (req, res) {
  const produtos = [
    { name: "Mouse Razer", price: 497, category: "Informática" },
    { name: "Teclado Logitech", price: 800, category: "Informática" },
    { name: "Iphone X", price: 6000, category: "Celular" },
  ];

  const nome = "Withney";
  const lang = "Javascript";
  res.render("index", {
    nome: nome, //variável
    lang: lang, //variável
    empresa: "Teste", //definido na hora
    valor: 5000, // definido na hora
    produtos, // item com mesmo nome da variável não é necessário indicar
  });
});

app.listen(4000, () => {
  console.log("O servidor está rodando na porta 4000");
});
