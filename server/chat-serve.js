var io = require('socket.io')(3000);
console.log("HHHH");
io.on('connection', function(socket){
	console.log("connection");
	socket.on("pao", function(msg){
	  console.log(msg);
	});

	socket.on("translateObject", function(Object){
		//console.log(Object.target,Object.x,Object.y);
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
 socket.on("LineE1",function(msg){
	console.log("Line");
	io.emit("clientLineE1",true);
 });

 socket.on("LineE2",function(msg){
 console.log("line2");
 io.emit("clientLineE2",true);
 });

 socket.on("LineE3",function(msg){
 console.log("line3");
 io.emit("clientLineE3",true);
 });
 socket.on("LineE4",function(msg){
 console.log("line4");
 io.emit("clientLineE4",true);
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
	//console.log("moving"+" X update="+x+" Y update"+y);
	//console.log(mb);
	var newx=x;var newy=y;
  io.emit("m2",true,newx,newy,Obj,mtr,mb);
 });

socket.on("scalingObject",function (msg,w,h,id,mb,text,bt,ch,cw,cc) {
	//console.log("Width = "+w+"Height= "+h+"cw="+cw+"ch="+ch);
   io.emit("scaling",true,w,h,id,mb,text,bt,ch,cw,cc);
  });

	socket.on("textObject",function (msg,w,h,id,mb,text,bt,ch,cw) {
		//console.log("Width = "+w+"Height= "+h+"cw="+cw+"ch="+ch);
	   io.emit("texting",true,w,h,id,mb,text,bt,ch,cw);
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


  socket.on('chat message', function(msg,use){
		console.log(msg,use);
    io.emit('chat message',msg,use);
  });
	socket.on("ismove2",function(msg,username){
		//console.log(username)
		io.emit("ismove", msg,username);
	});
	socket.on("ismove3",function(msg,username){
		//console.log(username)
		io.emit("ismove4", msg);
	});
	socket.on("Debug",function(msg){
		console.log(msg)
	});

socket.on('newuser',function(data,collback){
io.emit('newuser',data);
console.log("มาแล้วนะ");

});


});
