var socketIO = io();
socketIO.on('connect',function(){
    console.log("connected to server");
});
socketIO.on('newMessage',function(msgData){
    console.log("got message from server");
    console.log(msgData);
});
// socketIO.emit('getMessage',{
//     to:"utkarsh2311",
//     form:"Utkarsh Singh",
//     data:"Hey there I am sending you the email"
// });