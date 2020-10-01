//create an empty array called balls
let goodballs = [];
let badballs = [];
let score = 40
let me;
let mySound;
let aSound

function preload() {
  soundFormats('mp3', 'ogg','wav');
  mySound = loadSound('BonkNoise.wav');
  aSound = loadSound('GlassThud.wav')
}
function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(220,80,70);
  stroke(0)
  fill("white")
  rect(40,40,420,40)
  fill("black")
  rect(40,40,score,40)


  me.drawMe();
  me.moveMe();

  if (frameCount % 60 == 0) {
      let  g = new Ball(width, random(100,300), -3);
      goodballs.push(g);
      console.log(goodballs); //print the balls array to the console
      let b = new BadBall(width, random(100,300),-3)
      badballs.push(b)
      console.log(badballs);
    }

//	draw all the balls in that array
	for (let i = 0; i < goodballs.length; i++) {
	 	      goodballs[i].drawBall();
       	  goodballs[i].moveBall();
        	goodballs[i].bounceBall();
          badballs[i].drawBadBall();
          badballs[i].moveBadBall();
          badballs[i].bounceBadBall();

        }
}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill(90,45,179);
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            score=score+5
            mySound.setVolume(0.1);
            mySound.play();
    		}
  	}

}

class BadBall {
  constructor(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  drawBadBall(){
    stroke(0);
    strokeWeight(1);
    fill(240,87,2);
    ellipse(this.x,this.y,10,10);
  }
  moveBadBall(){
    this.x=this.x+this.speed;
    this.y=this.y+.5;
  }
  bounceBadBall(){
      if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
            this.speed = -this.speed;
            score=score-5
            aSound.setVolume(0.1);
            aSound.play();
        }
    }

}
