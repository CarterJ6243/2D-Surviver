let time;
let life;
let me;
let obstacle1 = [];

function setup(){
 createCanvas(400,400)
 me = new Avatar(width/2,height/2,3)

}

//function preload() {
//  soundFormats('mp3', 'ogg','wav');
//  deathSound = loadSound('486166__ruben-uitenweerde__glass-breaking.wav')
//}

function draw(){
  background(10,260,97)
  me.drawMe();
  me.moveMe();
  me.stopMe();

  if (frameCount % 100 == 0) {
      let  f = new Obstacle1(random(0,400), 0, 1);
      obstacle1.push(f);
      console.log(obstacle1);
    }
  for (let i = 0; i < obstacle1.length; i++) {
  	    obstacle1[i].drawObstacle();
     	  obstacle1[i].moveObstacle();
      	obstacle1[i].damageMe();

    }
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
    stopMe(x){
      if (this.x=20) {
      this.x = this.x + 1
    }
      if (this.x=380) {
      this.x = this.x - 1
    }
      if (this.y=20) {
      this.y = this.y + 1
    }
      if (this.y=380) {
      this.y = this.y - 1
    }
  }
}



  ohIdied(){
    if (life=0){
      freeze
      fill("black")
      rect(200,200,400,400)
    }
  }
}
class Obstacle1 {
  constructor(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed
  }
  drawObstacle() {
    strokeWeight(1);
    fill("red")
    ellipse(this.x,this.y,20,20)
  }
  moveObstacle(x,y) {
    this.x = this.x
    this.y = this.
    y+2
  }
  damageMe(){
    if (this.x >= me.x-5 && this.x <= me.x+5 && this.y > me.y-5 && this.y < me.y+5){
    //  deathSound.setVolume(0.1);
    //  deathSound.play();
      life = life-1
    }
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
