let time;
let life;
let me;

function setup(){
 createCanvas(400,400)
 background(10,260,97)
 me = new Avatar(width/2,height/2)

}

//function preload() {
//  soundFormats('mp3', 'ogg','wav');
//  deathSound = loadSound('486166__ruben-uitenweerde__glass-breaking.wav')
//}

function draw(){
  me.drawMe();
  me.moveMe();

}

class Avatar {
  constructor(x, y, speed){
  this.x = x;
  this.y = y;
  this.speed = speed;
  }

  drawMe(){
  strokeWeight(1)
  fill("purple")
  rect(this.x,this.y,10,10);
  }

  moveMe(){
    if (keyIsDown(UP_ARROW)) {
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)){
      this.x += this.speed;
    }
	}

  ohIdied(){
    if (life=0){

    }
  }
}
class Obstacle1 {
  constructor(){
    this.x = x
    this.y = y
    this.speed = speed
  }
  drawObstacle() {
    strokeWeight(1);
    fill("red")
    ellipse(this.x,this.y,20,20)
  }
}
class Terrain1 {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  drawTerrain1(){
    strokeWeight(1);
    fill("brown")
    rect(200,200,50,50)
  }

}
//damageMe(){
//  if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
  //  deathSound.setVolume(0.1);
  //  deathSound.play();
  //  life = life-1

//  }
//}
//class Terrain 2 {
//  constructor(x,y){
//    this.x = x
//    this.y = y
//  }
//  drawTerrain2(){
//    strokeWeight(1);
//    fill("grey")
//    rect(this.x,this.y,50,50)
//  }
//}
