function setup() {
  createCanvas(400,400);
}

function draw() {
  let s = 50;
  let d = 40;
  background("white");
  noStroke();
  for(let i=0;i<8;i++){
      for(let j=0;j<8;j++){
          let x = i*s;
          let y = j*s;
          fill("Black");
          textSize(16);
          textFont("Serif");
          text((i+j),(x+20),(y+30));
          if((i+j)%2===1){
              fill("gray");
              rect(x,y,s,s);
          }
          if(((i+j)%2===1)&&(j>4)){
              fill("black");
              ellipse(x+s/2,y+s/2,d);
          }
          if(((i+j)%2===1)&&(j<3)){
              fill("red");
              ellipse(x+s/2,y+s/2,d);
          }
      }
  }
}