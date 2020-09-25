var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
/*



The most important part of the code is what's happening inside of the io.on. Fundamentally, websocket connections in socket.io are responsible for two things: emitting events using the emit method, and listening for emitted events using the on method. These two methods are the foundation of communciation in socket.io.

Here, we're saying that whenever a client connects to a server, we should create a websocket connection, and then that connection should emit an event called "from server" along with a message of "HELLO!".

We're also setting listeners on the server for events from clients. When a client emits an event called "from client", the server should take the data from that event and log it to the terminal.
 */
app.get('/', function(req, res, next){
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  console.log("connection!");

  io.sockets.emit('from server', 'HELLO!');

  socket.on('from client', function(data){
    console.log(data);
  });
});

http.listen(3000, function(){
  console.log('listening on localhost:3000');
});
