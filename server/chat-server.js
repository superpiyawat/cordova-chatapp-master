var io = require('socket.io')(3000);

console.log("HHHH");
io.on('connection', function(socket){
	console.log("connection");
	socket.on("pao", function(msg){
	  console.log(msg);
	});

	socket.on("translateObject", function(Object){
		console.log(Object.target,Object.x,Object.y);
		io.emit("translateObjectOn",Object);
	});


	socket.on("textE1", function(msg){
	  console.log(msg);
		io.emit("clientTextE1", true);
	});

	socket.on("shapeE1", function(msg){
		console.log(msg);
		io.emit("clientCircleE1", true);
	});

  socket.on("squareE1",function(msg){
		console.log(msg);
		io.emit("clientSquareE1",true);
	});

 socket.on("TriangleE1",function(msg){
	 console.log(msg);
	 io.emit("clientTriangleE1",true);
 });
 socket.on("RemoveE1",function(msg){
	 console.log(msg);
	 io.emit("clientRemoveE1",true);
 });
 socket.on("clearEl",function(msg){
	console.log(msg);
	io.emit("clientClearEl",true);
 });

 socket.on("drawingModeEl",function(msg){
	console.log(msg);
	io.emit("clientDrawingModeEl",true);
 });

 socket.on("canvas",function(msg){
	console.log(msg);
	io.emit("clientCanvas",true);
 });

socket.on("movingObject",function (msg) {
  console.log("true แล้นนน");
  io.emit("m2",true);
 });


	socket.on('join:room', function(data){
		var room_name = data.room_name;
		socket.join(room_name);
	});


	socket.on('leave:room', function(msg){
		msg.text = msg.user + ' has left the room';
		socket.leave(msg.room);
		socket.in(msg.room).emit('message', msg);
	});


	socket.on('send:message', function(msg){
		socket.in(msg.room).emit('message', msg);
	});


});
