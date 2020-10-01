
//create an empty array called balls

let balls = [];
let hats = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(0);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
    for (let i=0; i < hats.length; i++){
      hats[i].drawHat();
      hats[i].moveHat();
    }

}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  if (keyCode === 38){
    let  b = new Ball(random(0,800),0);
    balls.push(b);
    console.log(balls);
  } else if (keyCode === 37){
    let h = new Hat(0,360);
    hats.push(h);
    console.log(hats);
    }
    return false;
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(255,255,255);
        fill("white");
        ellipse(this.x,this.y,random(10,20),random(10,20));
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
    this.x = this.x+.25;
		this.y = this.y+2;
	}


}

class Hat {

  constructor(x,y){
    this.x=x;
    this.y=y;
  }

  drawHat(){
      stroke(0)
      fill("red")
      rect(this.x,this.y,30,80)
      ellipse(this.x+20,this.y-20,60,60)
      fill("black")
      ellipse(this.x+30,this.y-30,20,20)
      line(this.x+20,this.y,this.x+45,this.y-10)
  }
  moveHat(){
    this.x = this.x+1
    this.y = this.y+random(-.5,.5)
  }
}
