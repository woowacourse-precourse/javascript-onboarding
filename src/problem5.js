function problem5(money) {
  var answer;
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let cnt = [0,0,0,0,0,0,0,0,0];  
  for(i=0;i<9;i++){
      if (money==0){
          break;
      }
      cnt[i] = parseInt(money / unit[i]);
      money = money % unit[i];
  }
  answer=cnt;
  return answer;
}

module.exports = problem5;