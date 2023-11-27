// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(240);
  var content = canvas.getContext("2d");
  // 配列をランダムに初期化する
  let colors= ["red", "green", "blue", "gray", "orange", "yellow", "skyblue", "purple", "black", "beige"]

  let scores = [0];
  for(let i = 1; i <= 10; i++){
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }
  print(scores);

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  let AngleS = TWO_PI * 0.75;//最初部分の位置を軸にする
  for(let i = 1; i < scores.length; i++){ total += scores[i]; }
  print(total);
  //scores[i]/total
  for(let i = 1; i < scores.length; i++){
    content.beginPath();
    AngleS = AngleS + TWO_PI * (scores[i-1]/total);//はじめ角度を定め
    AngleE = AngleS + TWO_PI * (scores[i]/total);//終わり角度を定め
    print("AngleS="+AngleS);
    print("AngleE="+AngleE);
    content.arc(width/2, height/2, width/3, AngleS, AngleE, false);//Arcを使って各乱数の部分を描く
    content.lineTo(width/2, height/2);//扇形を描くために中心に線を引く
    content.fillStyle = colors[i-1];//定めた十個の色を順番に選択する
    content.fill();//色を塗る
    content.closePath();
    stroke("black");
    fill(colors[colors.length - i]);
    text(scores[scores.length - i], 0.01*width, height - 12 * i);//色に対応する数値を表す
  }
  // BLANK[1]
}
