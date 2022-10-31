function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  if (money >= 50000) {
    answer[0] = parseInt(money / 50000);
    money = money % 50000;
  }
  if (money >= 10000) {
    answer[1] = parseInt(money / 10000);
    money = money % 10000;
  }
  if (money >= 5000) {
    answer[2] = parseInt(money / 5000);
    money = money % 5000;
  }
  if (money >= 1000) {
    answer[3] = parseInt(money / 1000);
    money = money % 1000;
  }
  if (money >= 500) {
    answer[4] = parseInt(money / 500);
    money = money % 500;
  }
  if (money >= 100) {
    answer[5] = parseInt(money / 100);
    money = money % 100;
  }
  if (money >= 50) {
    answer[6] = parseInt(money / 50);
    money = money % 50;
  }
  if (money >= 10) {
    answer[7] = parseInt(money / 10);
    answer[8] = money % 10;
  }

  return answer;
}

module.exports = problem5;
