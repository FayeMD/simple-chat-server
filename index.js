var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(3000, function(){
	console.log('listening on *:3000');
});
	


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
		socket.on('send message', function(data){
			io.sockets.emit('new message', data);
	});
});


app.use("/style.css", express.static(__dirname + '/style.css'));
app.use("/script.js", express.static(__dirname + '/script.js'));
app.use("/poppy.jpg", express.static(__dirname + '/poppy.jpg'));
app.use("/dots2.jpg", express.static(__dirname + '/dots2.jpg'))
app.use("/heart.jpg", express.static(__dirname + '/heart.jpg'));
app.use("/sky.jpg", express.static(__dirname + '/sky.jpg'));
app.use("/lemonade.jpg", express.static(__dirname + '/lemonade.jpg'));







