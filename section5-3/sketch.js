// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2023, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 1500; i <= 1600; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
    console.log("This year has " + daysInYear(i) + " days")
  }
  print(dayOfWeek(1,1,1)+"曜日");
  print("==========================");
  //print(dayOfWeek(2023,10,29)+"曜日");
  //print(dayOfWeek(2023,10,30)+"曜日");
  print(dayOfWeek(2023,10,31)+"曜日");
  //print(dayOfWeek(2023,11,1)+"曜日");
  //print(dayOfWeek(2023,11,2)+"曜日");
  //print(dayOfWeek(2023,11,3)+"曜日");
  //print(dayOfWeek(2023,11,4)+"曜日");

  console.log("Total days until 2019/10 ends:\n"+calendar2(2019, 10)+" days");
}

/*function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}*/

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);//この月の最初日の曜日を計算する
  let h = 1;
  const arr = ["日", "月", "火", "水", "木", "金", "土"];//インデクス参照のために作った配列
  if(dow == arr[0]){
    h = 0;//最初日が日曜日の場合、デフォルト高さが０
  }
  fill("black");
  text(y + "年" + m + "月", width/10, 20);//何年何月をプリントする
  for(i=0;i<7;i++){
    text(arr[i], width/10 + i * width/10, 40);//曜日のナビを置く
  }
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
    let dynamicdow = dayOfWeek(y, m, d);//毎日の曜日を計算する
    ind = arr.indexOf(dynamicdow);//曜日のインデクスを得る
    if(ind == 0){//日曜日の場合、行を変える
      h += 1;
    }
    fill("black");
    text(d, width/10 + ind * width/10, height/10 + (h+1) * height/10);//日を置く
  }
}

function calendar2(y, m){
  let days = 0;
  for(i = 1; i <= y; i++){
    if(i<y){
      for(j = 1; j <= 12; j++){
        days += daysInMonth(i, j);
      }
    }else{
      for(j = 1; j <= m; j++){
        days += daysInMonth(i, j);
      }
    }
  }
  return days;//西暦1年から日の総数を計算する
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);//うる年かどうかを判断する
}

function daysInYear(y){
  // BLANK[1]
  let sum = 0;
  for(i=1; i<=12; i++){
    sum += daysInMonth(y,i);//DaysInMonthを使って1年の日数を計算する
  }
  return sum;
}

function daysInMonth(y, m){
  if(y==1582 && m == 10){
    return 21;//ある原因で1582年10月は21日しかありません。
  }else{
    if(m == 2){
      return isLeapYear(y) ? 29 : 28;//うる年かどうかによって２月の日数が違う
    }
    else if(m == 4 || m == 6 || m == 9 || m == 11){
      return 30;//30日ある月
    }
    else{
      return 31;//31日ある月
    }
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

/*function dayOfWeek(y, m, d){
  // BLANK[2]
  let day = 0;
  for(i = 1; i <= y; i++){
    if(i<y){
      for(j = 1; j <= 12; j++){
        day += daysInMonth(i, j);
      }
    }else{
      for(j = 1; j < m; j++){
        day += daysInMonth(i, j);
      }
    }
  }
  day = day + d;
  return daysSinceBC(day % 7);
}*/

function dayOfWeek(y, m, d){
  // BLANK[2]
  let day = 0;
  for(i = 1; i <= y; i++){
    if(i<y){
      for(j = 1; j <= 12; j++){
        day += daysInMonth(i, j);
      }
    }else{
      for(j = 1; j < m; j++){
        day += daysInMonth(i, j);
      }
    }
  }
  day = day + d;//西暦1年からの日数を計算し、7日で割って余る。
  return dayOfWeekAsString((day+3) % 7);//DayOfWeekAsStringによって何曜日を対応する。
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}

function daysSinceBC(dow){
  const a = ["水", "木", "金", "土", "日", "月", "火"];
  return a[dow];
}
