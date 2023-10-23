let x, y, v=0, vx, vy;
const g = 1;
const vyMax = 20;
let jumpMax=250;
let jump=200;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height-25;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  // キーの処理（else ifにすると同時押しできなくなってしまうので要注意）
  if(keyIsDown(LEFT_ARROW)){ x -= 5; x = x-v; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; x = x+v; }
  if(keyIsDown(UP_ARROW)){ y -= 5;  }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown(SHIFT)){ v=10; }
    else{v=0} // ACCERLERATION
  if(keyIsDown(" ".charCodeAt(0))&&y==height-25){
    y -= 50;
  }
  y+=4;
   // スペースキーも文字キーと同様
  if(keyIsDown("R".charCodeAt(0))){ x=width/2; y=height/2; }
  x = constrain(x, 25, width-25);
  y = constrain(y, 25, height-25); 
}