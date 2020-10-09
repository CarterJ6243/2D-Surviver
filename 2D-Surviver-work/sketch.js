let time;
let life;
let me;
let obstacle1 = [];
let obstacle2 = [];
let obstacle3 = [];

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
  //me.stopMe();

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
  if (frameCount % 240 == 0) {
    let b = new Obstacle2(0,random(20,330, 1));
    obstacle2.push(b);
    console.log(obstacle2)
  }
  for (let i=0; i < obstacle2.length; i++) {
    obstacle2[i].drawObstacle2();
    obstacle2[i].moveObstacle2();
  }
  if (frameCount % 60 == 0) {
    let u = new Obstacle3(random(0,400),400, 1);
    obstacle3.push(u);
    console.log(obstacle3);
  }
  for (let i=0; i < obstacle3.length; i++) {
    obstacle3[i].drawObstacle3();
    obstacle3[i].moveObstacle3();
  }
}
//functionTime(){
//let time = 0
  //if (frameCount % 60 ==0){
  //    life = life + 1
//  }
//}

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
    this.y = this.y+2
  }
  damageMe(){
    if (this.x >= me.x-5 && this.x <= me.x+5 && this.y > me.y-5 && this.y < me.y+5){
    //  deathSound.setVolume(0.1);
    //  deathSound.play();
      life = life-1
    }
  }
}

class Obstacle2 {
  constructor(x,y,speed){
    this.x = x
    this.y = y
    this.speed = speed
  }
  drawObstacle2(){
    strokeWeight(1);
    fill("red")
    rect(this.x,this.y,40,40)
  }
  moveObstacle2(x,y){
    this.x = this.x+5
    this.y = this.y
  }
  damageMe2() {
    if(this.x >= me.x-20 && this.x <= me.x+20 && this.y > me.y-20 && this.y < me.y+20){
      life = life-1
    }
  }
}

class Obstacle3 {
  constructor(x,y,speed){
    this.x = x
    this.y = y
    this.speed = speed
  }
  drawObstacle3(){
    strokeWeight(1);
    fill("red")
    triangle(this.x,this.y,this.x+10,this.y-15,this.x-10,this.y-15)
  }
   moveObstacle3(x,y){
     this.x = this.x
     this.y = this.y - 10
   }
}
