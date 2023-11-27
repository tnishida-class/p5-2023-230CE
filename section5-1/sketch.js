// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background("navy");
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;//円を12等分して、12か星の位置を確定する
    let x = width/2 + cos(theta) * width/6;
    let y = height/2 + sin(theta) * height/4;//12か星の中心座標を定め、それから各星の位置を確定する。
    fill("gold");
    noStroke();
    star(x, y, height/25);
  }
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
function star(cx, cy, r){//星を描く関数
  beginShape();
  for(var i = 0; i < 5; i++){//五芒星なので、五回ループをする
    let theta = (HALF_PI - TWO_PI * i * 2 / 5) - PI;//五芒星の内角は３６°なので、１８０ー２＊３６０／５
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;//頂点の座標を計算する
    vertex(x,y);
  }
  endShape(CLOSE);
}
