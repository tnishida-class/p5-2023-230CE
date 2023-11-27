let balls = [];
let t = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(160, 192, 255);
    for(let i = 0; i < balls.length; i++){ // すべてのボールを描画し、速度の分だけ移動させる
        //rsize = random(10,30);
        let b = balls[i];
        ellipse(b.x, b.y, b.size);//ボールの位置とサイズ
        b.x += b.vx;
        b.y += b.vy;//ボールの移動速度
    }

    if(!mouseIsPressed && t % 200 == 0){
        for(num=0;num<10;num++){
            const b = { x: random(width/4, width-width/4), y: random(height/4, height-height/4), size: random(10,30), vx: random(-5,5), vy: random(-5,5) };
            balls.push(b);//ランダム位置からランダムサイズのボールを毎回10個生成する。
        }
    }
    t++;

    for(let i = 0; i < balls.length; i++){
        for(let j = i + 1; j < balls.length; j++){
            let b1 = balls[i];//ボールAの位置を獲得する
            let b2 = balls[j];//ボールBの位置を獲得する
            if(dist(b1.x, b1.y, b2.x, b2.y) <= b1.size/2 + b2.size/2 && dist(b1.x, b1.y, b2.x, b2.y) >= (b1.size/2 + b2.size/2)/2){
                //サイズが大きいボールは加速を受け、サイズが小さいボールははじけられ。
                if(b1.size > b2.size){
                    b1.vx = b1.vx+1;
                    b1.vy = b1.vy+1;
                    b2.vx = -(b2.vx-1);
                    b2.vy = -(b2.vy-1);
                }else if(b1.size < b2.size){
                    b1.vx = -(b1.vx-1);
                    b1.vy = -(b1.vy-1);
                    b2.vx = b2.vx+1;
                    b2.vy = b2.vy+1;
                }else{
                    b1.vx = -(b1.vx-1);
                    b1.vy = -(b1.vy-1);
                    b2.vx = -(b2.vx-1);
                    b2.vy = -(b2.vy-1);
                }//同じサイズの場合はふたつのボールがはじけられ
            }//もしボールAとボールBの距離がサイズより小さくなるとはじける。
        }
    }
}

function mouseDragged(){ // ドラッグされたらボールを増やす
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){ // mag(x,y) はベクトル(x,y)の長さ
    const b = { x: mouseX, y: mouseY, size: random(10,30), vx: dx, vy: dy };
    balls.push(b);
  }
}