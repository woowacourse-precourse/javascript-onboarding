function problem5(money) {
  var answer;
  let coins = [0,0,0,0,0,0,0,0,0];

  while(money>0){
    if(money >= 50000){
      money -= 50000;
      coins[0]++;
    }else if(money >= 10000){
      money -= 10000;
      coins[1]++;
    }else if(money >= 5000){
      money -= 5000;
      coins[2]++;
    }else if(money >= 1000){
      money -= 1000;
      coins[3]++;
    }else if(money >= 500){
      money -= 500;
      coins[4]++;
    }else if(money >= 100){
      money -= 100;
      coins[5]++;
    }else if(money >= 50){
      money -= 50;
      coins[6]++;
    }else if(money >= 10){
      money -= 10;
      coins[7]++;
    }else{
      money --;
      coins[8]++;
    }
  }
  answer = coins;
  return answer;
}

module.exports = problem5;
