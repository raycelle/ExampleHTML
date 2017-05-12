var canvas;
var ctx;

//current position
var x = 300;
var y = 200;

//magnitude of movement
var mx = 0;
var my = 0; 

//hold width and height of canvas
var width = 600;
var height = 400;

//fruits position
var goodX;
var goodY;
var badX;
var badY;
var fruitWidth = 50;
var fruitHeight = 50;

//check if collision
var goodCollision = false;
var badCollision = false;

var score = 0;

//initialize animation
function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	//Putting fruits in random places
	badX = Math.floor(Math.random()* (width-fruitWidth));
	badY = Math.floor(Math.random()* (height-fruitHeight));
	goodX = Math.floor(Math.random()* (width-fruitWidth));
	goodY = Math.floor(Math.random()* (height-fruitHeight));

	//wait for key press
	window.onkeydown = key_downcontrol;
	return setInterval(draw,10);

}
//draw circle
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0, 6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
}
//clear trail
function clear(){
	ctx.clearRect(0,0,width,height);
}

//draw frames
function draw(){
	clear();
	circle(x,y,10);
	drawGoodFruit();
	drawBadFruit();

	if(x+mx <0 || x+mx>width){
		mx = -mx;
	}
	if(y+my <0 || y+my>height){
		my = -my;
	}
	//move the shape
	x += mx;
	y += my;

	//check collision
	collisionCheck();
	collisionHandle();
}

function key_downcontrol(f){
	if(f.keyCode == 37){
		mx = -4;
		my = 0;
	} else if(f.keyCode == 38){
		mx = 0; 
		my = -4;
	} else if(f.keyCode == 39){
		mx = 4;
		my = 0;
	} else if(f.keyCode == 40){
		mx = 0;
		my = 4;
	}
}

function drawGoodFruit(){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var good = new Image();
	good.src = "good.png";
	ctx.drawImage(good,goodX,goodY,fruitWidth,fruitHeight);
}

function drawBadFruit(){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var bad = new Image();
	bad.src = "bad.png";
	ctx.drawImage(bad,badX,badY,fruitWidth,fruitHeight);
}

function collisionCheck(){
	if( (x>=badX) && (x <= badX + fruitWidth) && (y>=badY) && (y<=badY+fruitHeight)){
		badCollision = true;
	} else{
		badCollision = false;
	}
	if( (x>=goodX) && (x <= goodX + fruitWidth) && (y>=goodY) && (y<=goodY+fruitHeight)){
		goodCollision = true;
	} else{
		goodCollision = false;
	}
}

function collisionHandle(){
	if(badCollision){
		badX = Math.floor(Math.random()* (width-fruitWidth));
		badY = Math.floor(Math.random()* (height-fruitHeight));
		score -= 1;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	if(goodCollision){
		goodX = Math.floor(Math.random()* (width-fruitWidth));
		goodY = Math.floor(Math.random()* (height-fruitHeight));
		score += 1;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
}

init();

