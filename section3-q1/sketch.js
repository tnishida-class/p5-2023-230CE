// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  if(count < cycle/2){
    size = count + cycle /2
  }//countが50以下の場合、サイズがどんどん大きくなる　50から100
  else if (count >= cycle/2){
    size = (cycle - count) + cycle /2;
  }//countが50を超えた場合、サイズがどんどん小さくなる　100から50
  ellipse(width / 2, height / 2, size);
}
