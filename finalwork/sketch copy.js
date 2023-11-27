// 最終課題を制作しよう

function setup(){
  createCanvas(400, 600);
  draw();
}

function draw(){
  background(255);
  drawPlane(width/2-100, height-height/5, 10, 30);
  drawEnemy(width/2, height-height/5, 20, 60);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function drawBullet(cx, cy, w, h){
  fill("gold");
  ellipse(cx + w/2, cy + h/3, w, h * 1.33);
  rect(cx, cy, w, h);
}

function drawPlane(cx, cy, w, h){
  fill("lightgray");
  //body
  ellipse(cx + w/2, cy, w, w);
  triangle(cx, cy + h, cx + w, cy + h, cx + w / 2, cy + h * 1.33)
  rect(cx, cy, w, h);
  //tail
  rect(cx + w / 2.5, cy + h * 1.17, w / 5, w);
  fill("skyblue");
  quad(cx + w / 10, cy + h * 1.1, cx - w, cy + h * 1.25, cx - w, cy + h * 1.33, cx + w/2, cy + h * 1.30);
  quad(cx + w - w / 10, cy + h * 1.1, cx + w + w, cy + h * 1.25, cx + w + w, cy + h * 1.33, cx + w - w/2, cy + h * 1.30);
  //engine
  fill("lightgray");
  rect(cx - w - w + w / 3, cy + h / 2 - w / 2, w / 3, h / 4);
  rect(cx - w + w / 8 , cy + h / 2 - w / 4 - w / 2, w / 3, h / 4);
  rect(cx + w + w + w - w / 1.5, cy + h / 2 - w / 2, w / 3, h / 4);
  rect(cx + w + w - w / 2 , cy + h / 2 - w / 4 - w / 2, w / 3, h / 4);
  //wing
  fill("skyblue");
  quad(cx, cy + h / 2 - w / 2, cx - w * 2, cy + h / 2.1 + w / 3, cx - w * 2.1, cy + h / 2 + w / 2, cx, cy + h / 2 + w / 2.5);
  quad(cx + w, cy + h / 2 - w / 2, cx + w + w * 2, cy + h / 2.1 + w / 3, cx + w + w * 2.1, cy + h / 2 + w / 2, cx + w, cy + h / 2 + w / 2.5);
}

function drawEnemy(cx, cy, w, h){
  fill("gray");
  //body
  ellipse(cx + w/2, cy + h, w, w);
  triangle(cx, cy, cx + w, cy, cx + w / 2, cy + h - h * 1.33)
  rect(cx, cy, w, h);
  //tail
  rect(cx + w / 2.5, cy - h / 2, w / 5, w);
  fill("red");

  //engine
  fill("gray");
  rect(cx - w - w + w / 3, cy + h / 2 - w / 2, w / 3, h / 4);
  rect(cx - w + w / 8 , cy + h / 2 - w / 4, w / 3, h / 4);
  rect(cx + w + w + w - w / 1.5, cy + h / 2 - w / 2, w / 3, h / 4);
  rect(cx + w + w - w / 2 , cy + h / 2 - w / 4, w / 3, h / 4);
  //wing
  fill("red");
  rect(cx, cy + h / 2, cx, cy + h / 2 - w / 2, cx - w * 2, cy + h / 2 - w / 2, cx - w * 2 + w / 4, cy + h / 2 - w / 4);
}