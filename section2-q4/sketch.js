```// ギリシャ国旗
function setup() {
  const blue = color(13, 94, 175);//ギリシャ国旗の色を定める
  createCanvas(270, 180);//新規Canvas
  // noStroke();
  background(255);//背景色を指定する

  let d = height / 9; // rect 1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    if(i%2==0){
      clr=blue;//第0、2、4、6、8行目のrectを青にする
    }else{
      clr="white";//第1、3、5、7、9行目のrectを白にする
    }
    noStroke();//ボーダーを消す
    fill(clr);//色の仕上げ
    rect(0, i * d, width, (i + 1) * d);//九ヶrectを描く
  }

  fill(blue);//ブロックの色
  let size = d * 5;//十字rectのサイズを指定する
  rect(0, 0, size, size);//rectを描く

  fill(255);//十字rectの色は白
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
  noStroke();//ボーダーを消す
  rect(2*d, 0, 1*d, size);//縦のrectを描く第2dから第3d
  rect(0, 2*d, size, 1*d);//横のrectを描く
}```

// アメリカ国旗Simplified
```function drawStar(cx, cy, r){
  let theta = -90;
  let star = [];

  while(theta < 360-90){
    const pos = {
      x : r * Math.cos(theta * Math.PI/180) + cx,
      y : r * Math.sin(theta * Math.PI/180) + cy,
    };//星の頂点を定める
    star.push(pos);
    theta += 72;//角度は360/5、つまり72
  }

  fillStyle = "white";
  beginPath();
  moveTo(star[0].x, star[0].y);
  moveTo(star[2].x, star[2].y);
  moveTo(star[4].x, star[4].y);
  moveTo(star[1].x, star[1].y);
  moveTo(star[3].x, star[3].y);
  closePath();
  fill();
}```

function setup() {
  createCanvas(315, 180);//新規Canvas
  // noStroke();
  background(255);//背景色を指定する

  let d = height / 13; // rect 1本の太さ

  for(let i = 0; i < 13; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    if(i%2==0){
      clr="red";//第０、２、４、６、８、１０、１２行目のrectを赤にする
    }else{
      clr="white";//第1、3、5、7、9、11、13行目のrectを白にする
    }
    noStroke();//ボーダーを消す
    fill(clr);//色の仕上げ
    rect(0, i * d, width, (i + 1) * d);//十三ヶrectを描く
  }

  fill("Navy");//ブロックの色
  let sizex = d * 9;//rectのサイズを指定する
  let sizey = d * 7;
  rect(0, 0, sizex, sizey);//rectを描く

  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
  noStroke();//ボーダーを消す
  fill("white");
  //drawStar(size/2, size/2, size/2);
  for(i=0;i<14;i++){
    for(j=0;j<14;j++){
      if((i+j)%2==0){
        fill("white");
      }else{
        fill("navy");
      }
      ellipse((i+1) * (sizex/15), (j+1) * (sizey/15), sizex/26);
    }
  }//49丸（星）を描く
}