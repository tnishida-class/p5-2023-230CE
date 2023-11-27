function setup(){
  createCanvas(480,480);
  background("white");
  noFill()
}

function draw(){
  let i;
  for(i=0;i<10;i++){
      if(i<=4){
      stroke("blue")
  }else if(i<=9){
      stroke("red")
  }
      ellipse(width/2,height/2,20*(i+1),20*(i+1));
  }
}