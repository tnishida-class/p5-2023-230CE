// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
//const canvas = document.getElementById("cv1");
//var bubble = canvas.getContext("2d");
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon(width/4, height/4, "purple", "white", "I love keyakizaka46");
}

function balloon(cx, cy, bgcolor, txtcolor, t){
  let w = cx + textWidth(t);
  let h = cy + textAscent() + textDescent();
  let p = 2;
  fill(bgcolor);
  rect(cx + p, cy + p * 2, textWidth(t) + p * 2, textAscent() + textDescent() + p * 2);
  //吹き出しの位置(ｘ軸最初位置足す余白、ｙ軸最初位置足す余白、テキストの広さ足す余白、テキストの高さ足す余白)
  fill(txtcolor);
  text(t, cx + p * 2, h + p);
  fill(bgcolor);
  triangle(w, h + p * 4 , w + p * 4, h + p * 7, w + p * 3, h + p * 4);
  //ellipse(w + p * 5, h + p * 8, p * 4);
  //ellipse(w + p * 9, h + p * 12, p * 2);
//  bubble.beginPath();
//  bubble.moveTo(textWidth(t), textAscent() + textDescent() + p * 2);
//  bubble.lineTo(textWidth(t) + p, textAscent() + textDescent() + p * 5);
//  bubble.lineTo(textWidth(t) + p * 2, textAscent() + textDescent() + p * 2);
//  bubble.closePath();
}
