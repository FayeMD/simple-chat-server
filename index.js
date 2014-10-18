var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	nicknames = [];
	
server.listen(3000, function(){
	console.log('listening on *:3000');
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


io.sockets.on('connection', function(socket){
	socket.on('new user', function(data, callback){
		if (nicknames.indexOf(data) != -1){
			callback(false);
		} else{
			callback(true);
			socket.nickname = data;
			nicknames.push(socket.nickname);
			updateNicknames();
		}
	});

	function updateNicknames(){
		io.sockets.emit('usernames', nicknames);
	}

	socket.on('send message', function(data){
		io.sockets.emit('new message', {msg: data, nick: socket.nickname});
	});

	socket.on('disconnect', function(data){
		if(!socket.nickname) return;
		nicknames.splice(nicknames.indexOf(socket.nickname), 1);
		updateNicknames();
	});
});

app.use("/style.css", express.static(__dirname + '/style.css'));
app.use("/script.js", express.static(__dirname + '/script.js'));
app.use("/heart2.jpg", express.static(__dirname + '/heart2.jpg'));
app.use("/sky.jpg", express.static(__dirname + '/sky.jpg'));
app.use("/welcome2.jpg", express.static(__dirname + '/welcome2.jpg'));
app.use("/frame.jpg", express.static(__dirname + '/frame.jpg'));
app.use("/frame2.jpg", express.static(__dirname + '/frame2.jpg'));
