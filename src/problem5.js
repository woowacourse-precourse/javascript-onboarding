function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  while(money >= 10) {
    if(money >= 50000) {
      answer[0] = parseInt(money/50000);
      money -= parseInt(money/50000) * 50000;
    } else if(money >= 10000) {
      answer[1] = parseInt(money/10000);
      money -= parseInt(money/10000) * 10000;
    } else if(money >= 5000) {
      answer[2] = parseInt(money/5000);
      money -= parseInt(money/5000) * 5000;
    } else if(money >= 1000) {
      answer[3] = parseInt(money/1000);
      money -= parseInt(money/1000) * 1000;
    } else if(money >= 500) {
      answer[4] = parseInt(money/500);
      money -= parseInt(money/500) * 500;
    } else if(money >= 100) {
      answer[5] = parseInt(money/100);
      money -= parseInt(money/100) * 100;
    } else if(money >= 50) {
      answer[6] = parseInt(money/50);
      money -= parseInt(money/50) * 50;
    } else {
      answer[7] = parseInt(money/10);      
      money -= parseInt(money/10) * 10;
    }
  }
  answer[8] = money

  return answer;
}

module.exports = problem5;
