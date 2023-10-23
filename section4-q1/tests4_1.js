function setup() {
    createCanvas(400, 400);
    background("white");
    let scores = [];
    let sum = 0;
    let average = 0;
    let minimum = 100;
    let maximum = 0;
    
    for(i=0; i<10; i++){
      scores[i] = int(random(60, 100));//60から100までの乱数を十個生成する
    }
    //console.log(scores);
    
    for(let i=0; i<scores.length; i++){
      sum += scores[i];//乱数の総和を計算する
    }
    print("SUM: "+sum+"\n");
    
    average = sum/scores.length;
    print("AVG: "+average+"\n");//乱数の平均値を計算する
    
    for(i=0; i<scores.length; i++){
      if(scores[i] > maximum){
        maximum = scores[i];//乱数の最大値を見つけ出す
      }
      if(scores[i] < minimum){
        minimum = scores[i];//乱数の最小値を見つけ出す
      }
    }
    print("MAX: "+maximum+"\n");
    print("MIN: "+minimum+"\n");
    
    const n = 10;
    for(i=0;i<scores.length; i++){
      const w = width/scores.length;//バーの広さを確定する
      const h = height*scores[i]/100;//バーの高さを百分率で確定する
      if(scores[i] == maximum){
        fill("green");//最大値は緑色
      }
      else if(scores[i] == minimum){
        fill("red");//最小値は赤色
      }else{
        fill("gray");//ほかの値は灰色
      }
      rect(i*w+2, height-h, w-4, h);
      fill("black");
      text(scores[i].toPrecision(3),(i+1/6)*w,height-h+12);//各バーの数値を表す
    }
    
    stroke("blue");
    const ah = height * average/100;
    line(0, height-ah, width, height-ah);//平均値の線を引く
    fill("blue");
      text("Average Line", 0.01*width, height-ah+12);
  }