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
	  console.log("Textboxt Created");
		io.emit("clientTextE1", true);
	});

	socket.on("shapeE1", function(msg){
		console.log("Circle Created");
		io.emit("clientCircleE1", true);
	});

  socket.on("squareE1",function(msg){
		console.log("Squre Created");
		io.emit("clientSquareE1",true);
	});

 socket.on("TriangleE1",function(msg){
	 console.log("Triangle Created");
	 io.emit("clientTriangleE1",true);
 });
 socket.on("RemoveE1",function(msg,active){
	 console.log("Remove Obj");
	 io.emit("clientRemoveE1",active);
 });
 socket.on("clearEl",function(msg){
	console.log("Remove all obj");
	io.emit("clientClearEl",true);
 });

 socket.on("drawingModeEl",function(msg){
	console.log("Drawing Mode Enable");
	io.emit("clientDrawingModeEl",true);
 });

 socket.on("canvas",function(msg){
	console.log(msg);
	io.emit("clientCanvas",true);
 });

socket.on("movingObject",function (msg,x,y,Obj,mtr,mb) {
	console.log("moving"+" X update="+x+" Y update"+y);
	var newx=x;var newy=y;
  io.emit("m2",true,newx,newy,Obj,mtr,mb);
 });

socket.on("scalingObject",function (msg,w,h,id,mb,text,bt) {
	console.log("Width = "+w+"Height= "+h);
   io.emit("scaling",true,w,h,id,mb,text,bt);
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
