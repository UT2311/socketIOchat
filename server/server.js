const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const publicpath = path.join(__dirname ,"../public");
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicpath));
console.log(publicpath);
io.on('connection',(socket)=>{
    console.log('new user connected');
    socket.on('disconnect',()=>{
        console.log("User Disconnected");
    });
    // socket.emit('newMessage',{
    //     senderName:"utkarsh Singh",
    //     id:1
    // });
    socket.on('getMessage',(msgData)=>{
        console.log("got message from user --");
        console.log(msgData);
        io.emit('newMessage',{
            data: msgData
        });
    });
});
server.listen(port,()=>{
    console.log(`the server is listening to port ${port}`);
});