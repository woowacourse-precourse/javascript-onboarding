function problem5(money) {
  var answer = [0,0,0,0,0,0,0,0,0];

  answer[0] = money / 50000;
  money %= 50000;
  answer[1] = money / 10000;
  money %= 10000;
  answer[2] = money / 5000;
  money %= 5000;
  answer[3] = money / 1000;
  money %= 1000;
  answer[4] = money / 500;
  money %= 500;
  answer[5] = money / 100;
  money %= 100;
  answer[6] = money / 50;
  money %= 50;
  answer[7] = money / 10;
  money %= 10;
  answer[8] = money / 5;
  money %= 5;
  answer[9] = money / 1;

  return answer;
}

module.exports = problem5;
