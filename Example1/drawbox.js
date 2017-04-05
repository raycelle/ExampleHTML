console.log('I am working!');

var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');



ctx.fillStyle = "rgb(0,0,150)";
ctx.fillRect(0,0,300,300);
ctx.clearRect(20,20,120,120);
ctx.clearRect(160,20,120,120);
ctx.clearRect(20,160,120,120);
ctx.clearRect(160,160,120,120);

// ctx.fillStyle = "rgb(0,0,150)";
// ctx.fillRect(0,0,150,150);
// ctx.fillRect(150,150,150,150);

// ctx.fillStyle="rgb(0,0,200)";
// ctx.fillRect(100,100,100,100);
// ctx.strokeStyle = "rgb(0,0,200)";
// ctx.strokeRect(80,80,140, 140);
// ctx.clearRect(120,120,60,60);