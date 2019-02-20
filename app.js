var io = require('socket.io')(process.env.PORT || 5000);

var playercount = 0;

console.log("Server Running");

io.on('connection', function(socket){
    console.log("Connected to Unity");


    socket.broadcast.emit('spawn');
    playercount++;

    for(var i=0; i<playercount; i++){
        socket.emit('spawn');
        console.log('sending spawn to new player');
    }



    socket.on('sayhello', function(data){
        console.log("Unity game says hello");
        socket.emit("talkback");
    });

    socket.on('disconnect', function(){
        playercount--;
        console.log("player Disconnected");
    });
});