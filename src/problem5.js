function problem5(money) {
  var answer;
  let coins = [0,0,0,0,0,0,0,0,0];
  let unit = [50000,10000,5000,1000,500,100,50,10,1];

  for(let i=0; i<9; ++i){
    if(money >= unit[i]){
      for(let n=1; money > unit[i]*n; ++n){
        money -= unit[i];
        coins[i]++;
        if(money <= 0) break;
      }
    }
  if(money <= 0) break;
  }
  answer = coins;
  return answer;
}

module.exports = problem5;
