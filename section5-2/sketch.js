// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup(){
  createCanvas(300, 100);
  background(200);
  fill(0);
  //crossmark(10, 10, 90, 90);
  //ngmark(150, 50, 80);
  //star(250, 50, 40);
  polygon(width/3, height/2, 40, 3);//polygon(cx, cy, r, p(triangle/quadrangle/pentagon/...))
  star(width*2/3, height/2, 40, 16);//５以上奇数のみ
}

/*function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}

function ngmark(cx, cy, r){
  push();
  noFill();
  strokeWeight(r * 0.1);
  let d = sqrt(r * r / 8);
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();
}*/

function star(cx, cy, r, p){
  beginShape();
  for(var i = 0; i < p; i++){
    let theta = (HALF_PI - TWO_PI * i * 2 / p) - PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function polygon(cx, cy, r, p){
  beginShape();
  for(var i = 0; i < p; i++){
    let theta = TWO_PI * i / p - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
