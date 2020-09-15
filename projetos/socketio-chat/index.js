var express = require('express');
// instância da aplicação
var app = express();
// socket.io precisa do servidor http nativo do node
// mas pode passar a instância do app (exopress)
var http = require('http').createServer(app)
// agora sim instanciamos o socket.io
var io = require('socket.io')(http)

// sempre que um cliente se conecta
// param socket é o cliente
io.on("connection", (socket) => {

   socket.on('disconnect', ()=> {
      console.log(socket.id + " Se desconectou")
   })

})


app.set('view engine', 'ejs');

app.get("/", (req, res) => {
   res.render("index");
   console.log('rodou')
})


// precisamos abrir o servidor nativo
http.listen(3000, () => {
   console.log('app rodando')
})