var express = require('express');
// instância da aplicação
var app = express();
var cors = require('cors')
var http = require('http').createServer(app)
var io = require('socket.io')(http);

// socket.io precisa do servidor http nativo do node
// mas pode passar a instância do app (exopress)
// agora sim instanciamos o socket.io

// io.set('origins', 'http://b15ab7c8e0a7.ngrok.io');

// app.use(cors());
// app.options('*', cors());

// io.origins(['*']);



// sempre que um cliente se conecta
// param socket é o cliente
io.on("connection", (socket) => {
   socket.on('disconnect', ()=> {
      console.log(socket.id + " Se desconectou")
   })

   // ao receber uma msg, enviar a msg para o showmsg
   socket.on('msg', (data) => { 
      // aqui ele responde apenas pro client (socket)
      // socket.emit('showmsg', data); 

      // se quiser enviar para todo mundo, deve-se enviar como io.emit

      io.emit('showmsg', data); 
      // outra opção seria o socket.broadcast.emit()
      // ele envia pra todo mundo através do  socketclient menos pro client que mandou
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