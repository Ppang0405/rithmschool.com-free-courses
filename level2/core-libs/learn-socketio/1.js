/*




Objectives:

By the end of this chapter, you should be able to:

    Define what a websocket is
    Compare and contrast the HTTP and WS protocols
    Build an express application using socket.io

 */


/*


1. 

Socket.io

One of the most popular libraries when working with Node is Socket.io, which is a library for handling websocket connections and communication between multiple clients and servers. There is a built-in module for Node for websockets, but the Socket.io library abstracts quite a bit of detail for us, making it setup much more straightforward. But first, let's try to understand what a websocket is.

With the HTTP protocol, a client and server communicate via the request-response cycle. The client initiates a request, the server issues a response, and the cycle is complete. When that interaction is over, the connection between client and server is complete (though the connection can be kept alive via HTTP headers).

With WebSockets, clients and servers connect through a process called a "handshake" and then keep the communication open, which allows for bidirectional communications: the client can push data to the server, but the server can also push data to the client without first waiting for a request to come in! This allows for applications that feel as though they are updating and responding to user input in real time. Chat rooms and multiplayer games are both examples of applications that can benefit from using websockets.

The ws or websocket protocol is an upgrade from another strategy known as "longpolling," which involves making frequent AJAX calls to see if the server has any new information and then updating the client accordingly.


 */


/*




2. advance private room

Different kinds of messages and rooms

When using Socket.io, there are different types of messages you may want to send to different users. For managing chat rooms, socket.io has the idea of a room which has its own name and each socket has its own id to ensure private messages can work.

Here are the helpful methods for sending certain types of messages to certain users:

io.emit('name of event'); or io.sockets.emit('name of event'); - sends to everyone in every room, including the sender

io.to('name of room').emit('name of event'); - sends to everyone including the sender, in a room (the first parameter to to)

socket.broadcast.to('name of room').emit('name of event'); - sends to everyone except the sender in a room (the first parameter to to)

socket.emit('name of event') - sends to the sender and no one else

socket.broadcast.to(someOtherSocket.id).emit(); - Send to specific socket only (used for private chat)
 */