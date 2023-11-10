// 最終課題を制作しよう
let px = 0;
let py = 0;
let ex = 0;
let ey = 0;
let bullets = [];
let ebullets = [];
let t = 0;
let et = 0;
let health = 5;
let ehp = 10;

function setup(){
  createCanvas(400, 600);
  draw();
  px = width / 2;
  py = height - height / 5;
  ex = width/2;
  ey = height/5;
}


function draw(){
  background(255);
  textSize(32);
  fill("skyblue");
  text("Your HP:" + health, 10, 30);
  fill("red");
  text("Enemy's HP:" + ehp, 10, 60);
  fill("white");
  drawEnemy(ex, ey, 10, 30);
  for(let i = 0; i < ebullets.length; i++){ // 敵の玉を描く
    let eb = ebullets[i];
    ellipse(eb.x + eb.size / 2, eb.y + eb.size * 3, eb.size);//玉のデフォルト位置と大きさ
    eb.x += eb.vx;//飛行機が移動した場合、玉のｘは変わらない
    eb.y += eb.vy;//玉の移動速度
  }

  if(!mouseIsPressed && et % 100 == 0){
    for(num=0;num<1;num++){
        const eb = { x: ex , y: ey, size: random(5,10), vx: 0, vy: 5 };
        ebullets.push(eb);//毎回玉を一個生成する
    }
  }
  et++;

  drawPlane(px, py, 10, 30);
  if(keyIsDown("W".charCodeAt(0))){ py -= 5; }
  if(keyIsDown("A".charCodeAt(0))){ px -= 5; }
  if(keyIsDown("S".charCodeAt(0))){ py += 5; }
  if(keyIsDown("D".charCodeAt(0))){ px += 5; }
 
  if(keyIsDown(" ".charCodeAt(0))){ px = width/2; py = height - height/5; }
  for(let i = 0; i < bullets.length; i++){ // 味方の玉を描く
    let b = bullets[i];
    drawBullet(b.x + b.size / 2, b.y - b.size * 3, b.size);//玉のデフォルト位置と大きさ
    b.x += b.vx;//飛行機が移動した場合、玉のｘは変わらない
    b.y += b.vy;//玉の移動速度
  }

  if(!mouseIsPressed && t != 0 && t % 100 == 0){
    for(num=0;num<1;num++){
        const b = { x: px , y: py, size: random(2,5), vx: 0, vy: -5 };
        bullets.push(b);//毎回玉を一個生成する
    }
  }
  t++;

  //敵の玉と自分の飛行機の距離を計算する
  for(let i = 0; i < bullets.length; i++){
    for(let j = i + 1; j < ebullets.length; j++){
        let b1 = bullets[i];//自分の玉の位置を獲得する
        let b2 = ebullets[j];//敵の玉の位置を獲得する
        if(dist(b1.x, b1.y, b2.x, b2.y) <= b1.size/2 + b2.size/2){
          bullets.splice(i, 1);
          ebullets.splice(j, 1);
        }//もし玉と玉の距離が玉自身の大きさより小さい場合、2つの玉を消す
    }
  }

  for(let i = 0; i < ebullets.length; i++){
    let b2 = ebullets[i];
    if(dist(px, py, b2.x, b2.y) <= b2.size/2 + 10){//敵の玉にぶつかったら、玉を消し、HP-1
      ebullets.splice(i, 1);
      health--;
    }
  }

  if(health == 0) {
    background(255);
    textSize(32);
    fill("red");
    text("GAME OVER", 100, 300);
    noLoop();
  }

  for(let i = 0; i < bullets.length; i++){
    let b1 = bullets[i];
    if(dist(b1.x, b1.y, ex, ey) <= b1.size/2 + 10){//敵を打ったら、玉を消し、敵のHP-1
      bullets.splice(i, 1);
      ehp--;
    }
  }

  if(ehp == 0) {
    background(255);
    textSize(32);
    fill("green");
    text("YOU WIN", 100, 300);
    noLoop();
  }

  //Rでゲームを初期化する
  if (keyIsDown("R".charCodeAt(0))) {
    bullets = [];
    ebullets = [];
    px = width / 2;
    py = height - height / 5;
    ex = width/2;
    ey = height/5;
    health = 4;
    ehp = 10;
    loop();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function drawBullet(cx, cy, size){
  fill("gold");
  ellipse(cx + size/2, cy + size, size, 3 * size * 1.33);
  rect(cx, cy, size, size * 3);
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
  quad(cx + w / 2, cy - h / 5, cx + w / 6, cy - h / 8, cx - w / 2, cy - h / 4, cx - w / 2, cy - h / 3);
  quad(cx + w / 2, cy - h / 5, cx + w - w / 6, cy - h / 8, cx + w + w / 2, cy - h / 4, cx + w + w / 2, cy - h / 3);
  //engine
  fill("gray");
  rect(cx - w - w + w / 3, cy + h / 2 - w / 2, w / 3, h / 4);
  rect(cx - w + w / 8 , cy + h / 2 - w / 4, w / 3, h / 4);
  rect(cx + w + w + w - w / 1.5, cy + h / 2 - w / 2, w / 3, h / 4);
  rect(cx + w + w - w / 2 , cy + h / 2 - w / 4, w / 3, h / 4);
  //wing
  fill("red");
  quad(cx, cy + h / 2 + w / 4, cx, cy + h / 2 - w / 2, cx - w * 2, cy + h / 2 - w / 1.67, cx - w * 2 + w / 8, cy + h / 2 - w / 3);
  quad(cx + w, cy + h / 2 + w / 4, cx + w, cy + h / 2 - w / 2, cx + w + w * 2 + w / 8, cy + h / 2 - w / 1.67, cx + w + w * 2, cy + h / 2 - w / 3);
}