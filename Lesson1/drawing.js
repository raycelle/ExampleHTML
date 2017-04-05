//alert("Hello there");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();
ctx.fillStyle = "rgb(0,100,100)";
ctx.fillRect(200,200,80,80);
ctx.stokeStyle = "rgb(100,100,0)";
ctx.strokeRect(180,180,120,120);