var socket = io();
		$('form').submit(function){
				socket.emit('chat message', + $('#userMsg').val());
				$('#userMsg').val('');
				return false;
		});

socket.on('chat message', function(msg){
	$('msgDisplay').append($('<p>').text(msg));
});

