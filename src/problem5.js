function problem5(money) {
  /**
   * answer[0] : 오만 원권
   * answer[1] : 만 원권
   * answer[2] : 오천 원권
   * answer[3] : 천 원권
   * answer[4] : 오백원 동전
   * answer[5] : 백원 동전
   * answer[6] : 오십원 동전
   * answer[7] : 십원 동전
   * answer[8] : 일원 동전
   * */

      // money 1이상 10,000,000 이하
  const answer = [0,0,0,0,0,0,0,0,0];

  const moneyString = money.toString().split('');

  answer[8] = Number(moneyString[moneyString.length-1]);
  moneyString[moneyString.length-1] = '0';

  // 10의 자리
  if(Number(moneyString[moneyString.length-2]/5 >= 1)){
    answer[6] = 1;
    answer[7] = Number(moneyString[moneyString.length-2]) -5;
  }
  else{
    answer[7] = Number(moneyString[moneyString.length-2]);
  }
  moneyString[moneyString.length-2] = '0';

  // 100의 자리
  if(Number(moneyString[moneyString.length-3]/5 >= 1)){
    answer[4] = 1;
    answer[5] = Number(moneyString[moneyString.length-3]) -5;
  }
  else{
    answer[5] = Number(moneyString[moneyString.length-3]);
  }
  moneyString[moneyString.length-3] = '0';

  // 1000의 자리
  if(Number(moneyString[moneyString.length-4]/5 >= 1)){
    answer[2] = 1;
    answer[3] = Number(moneyString[moneyString.length-4]) -5;
  }
  else{
    answer[3] = Number(moneyString[moneyString.length-4]);
  }
  moneyString[moneyString.length-4] = '0';

  // 10000 이후
  money = Number(moneyString.join(''));
  if(money / 50000 >= 1){
    answer[0] = money / 50000;
    answer[1] = (money - ( answer[0] * 50000)) / 10000;
  }
  else{
    answer[1] = money / 10000;
  }

  return answer;
}

module.exports = problem5;
