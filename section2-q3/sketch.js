// ダーツ
function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);//色を指定する
  createCanvas(400, 400);//Canvasを作成する
  background(255);//背景色を白にする
  stroke(255);//ボーダー色を白にする
  strokeWeight(3);//ボーダーの太さを指定する

  const centerX = width / 2; // 中心は (cx, cy)
  const centerY = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

  function drawCircle(c, r){
    fill(c);
    ellipse(centerX, centerY, r, r);
  }//中心座標によって円を描く
  
  function drawArcs(c1, c2, r) {
    for (let i = 0; i < 20; i++) {
      let start = TWO_PI / 20 * i;
      let stop = TWO_PI / 20 * (i + 1);
      fill(i % 2 == 0 ? c1 : c2);
      arc(centerX, centerY, r, r, start, stop, PIE);
    }
  }//リングを２０個分けて、二つの色を指定する。

  drawCircle(black, maxR);//ダーツの背景
  drawArcs(green, red, maxR * 0.8);//ダーツの二倍エリア
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawArcs(black, cream, maxR * 0.75);//外のダーツの一倍エリア
  drawArcs(green, red, maxR * 0.45);//ダーツの三倍エリア
  drawArcs(black, cream, maxR * 0.4);//内のダーツの一倍エリア
  drawCircle(green, maxR * 0.1);//25点エリア
  drawCircle(red, maxR * 0.05);//50点エリア
}
