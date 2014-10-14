console.log("script loaded");

var express = require('express'),
	app = express(),
	http = require('http').Server(app);

	http.listen(3000, function(){
	console.log('listening on *:3000');
});
	var io = require('socket.io')(http);


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


app.use("/style.css", express.static(__dirname + '/style.css'));
app.use("/script.js", express.static(__dirname + '/script.js'));
app.use("/poppy.jpg", express.static(__dirname + '/poppy.jpg'));
app.use("/dots2.jpg", express.static(__dirname + '/dots2.jpg'))
app.use("/heart.jpg", express.static(__dirname + '/heart.jpg'));
app.use("/sky.jpg", express.static(__dirname + '/sky.jpg'));
app.use("/lemonade.jpg", express.static(__dirname + '/lemonade.jpg'));

io.on('connection', function(socket){
	console.log("connection");
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
		console.log('message: ' + msg);
	});
});






