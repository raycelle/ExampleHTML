console.log("Hello I'm working")

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;
var life = 3;

function preload(){
	game.load.image('sky','assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star','assets/star.png');
	game.load.spritesheet('dude','assets/dude.png',32,48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32,32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0,'sky');

	//Making group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	//ground
	var ground = platforms.create(0,game.height-50,'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;


	//ledges
	var ledge = platforms.create(400,400,'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(400,400,'ground');
	ledge.body.immovable = true;

	//player
	player = game.add.sprite(32, game.world.height-220,'dude');
	//player animations using the sprite
	player.animations.add('left',[0,1,2,3],10,true);
	player.animations.add('right',[5,6,7,8],10,true);
	//apply phyics to dude
	game.physics.arcade.enable(player);

	//player physics property - slight bounce, gravity, stay on screen
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	//enemies
	enemy1 = game.add.sprite(760, 20, 'baddie');
		//enemy animations
		enemy1.animations.add('left',[0,1], 10, true);
		enemy1.animations.add('right',[2,3], 10, true);
		game.physics.arcade.enable(enemy1);
		//enemy physical properties
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;

	enemy2 = game.add.sprite(10, 20, 'baddie');
		//enemy animations
		enemy2.animations.add('left',[0,1], 10, true);
		enemy2.animations.add('right',[2,3], 10, true);
		game.physics.arcade.enable(enemy2);
		//enemy physical properties
		enemy2.body.bounce.y = 0.2;
		enemy2.body.gravity.y = 500;
		enemy2.body.collideWorldBounds = true;

	enemy3 = game.add.sprite(200, 20, 'baddie');
		//enemy animations
		enemy3.animations.add('left',[0,1], 10, true);
		enemy3.animations.add('right',[2,3], 10, true);
		game.physics.arcade.enable(enemy3);
		//enemy physical properties
		enemy3.body.bounce.y = 0.2;
		enemy3.body.gravity.y = 500;
		enemy3.body.collideWorldBounds = true;

	//create keyboard entry
	cursors = game.input.keyboard.createCursorKeys();

	//create stars
	stars = game.add.physicsGroup();
	stars.enableBody = true;
	//create 12 evenly spaced stars
	for(var i =0; i<12; i++){
		//create a star inside the 'stars' group
		var star = stars.create(i*70, 0, 'star');
		//lets give it gravity
		star.body.gravity.y = 200;
		//give a slight bounce
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}

	//setting style for text
	var style = {font: "bold 32px Arial", fill: "#fff",boundsAlignH:"center", boundAlignV:"middle"};
	scorelabel = game.add.text(-60, 0, "Your score is: ",style);
	scoretext = game.add.text(70, 0, score, style);
	scorelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	scoretext.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	//set text bounds
	scorelabel.setTextBounds(0, 520, 800, 100);
	scoretext.setTextBounds(0, 520, 800, 100);
	//setup lives text
	lifelabel = game.add.text(-300, 0, "Lives: ",style);
	lifetext = game.add.text(-240, 0, life, style);
	lifelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	lifetext.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	//set text bounds
	lifelabel.setTextBounds(0, 0, 800, 100);
	lifetext.setTextBounds(0, 0, 800, 100);

}

function update(){
	//setup collisions player with platform
	game.physics.arcade.collide(player, platforms);
	//collide enemies with platforms
	game.physics.arcade.collide(enemy1, platforms);
	game.physics.arcade.collide(enemy2, platforms);
	game.physics.arcade.collide(enemy3, platforms);

	//reset player velocity if no events
	player.body.velocity.x = 0;

	//left arrow key is pressed
	if(cursors.left.isDown){
		//move left
		player.body.velocity.x = -150;
		//play animation
		player.animations.play('left');
	} else if(cursors.right.isDown){
		//move left
		player.body.velocity.x = 150;
		//play animation
		player.animations.play('right');
	} else{
		//stand still
		player.animations.stop();
		player.frame = 4;
	}
}
