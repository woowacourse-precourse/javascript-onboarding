function problem5(money) {
  var answer = Array.from({ length: 9 }, (x) => 0);
  while (money >= 50000) {
    answer[0] = Math.floor(money / 50000);
    money %= 50000;
  }
  while (money >= 10000) {
    answer[1] = Math.floor(money / 10000);
    money %= 10000;
  }
  while (money >= 5000) {
    answer[2] = Math.floor(money / 5000);
    money %= 5000;
  }
  while (money >= 1000) {
    answer[3] = Math.floor(money / 1000);
    money %= 1000;
  }
  while (money >= 500) {
    answer[4] = Math.floor(money / 500);
    money %= 500;
  }
  while (money >= 100) {
    answer[5] = Math.floor(money / 100);
    money %= 100;
  }
  while (money >= 50) {
    answer[6] = Math.floor(money / 50);
    money %= 50;
  }
  while (money >= 10) {
    answer[7] = Math.floor(money / 10);
    money %= 10;
  }
  answer[8] = money;
  return answer;
}

module.exports = problem5;
