function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  while (money) {
    if (money >= 50000) {
      answer[0] += change(money, 50000);
      money = money % 50000;
    } else if (money >= 10000) {
      answer[1] += change(money, 10000);
      money = money % 10000;
    } else if (money >= 5000) {
      answer[2] += change(money, 5000);
      money = money % 5000;
    } else if (money >= 1000) {
      answer[3] += change(money, 1000);
      money = money % 1000;
    } else if (money >= 500) {
      answer[4] += change(money, 500);
      money = money % 500;
    } else if (money >= 100) {
      answer[5] += change(money, 100);
      money = money % 100;
    } else if (money >= 50) {
      answer[6] += change(money, 50);
      money = money % 50;
    } else if (money >= 10) {
      answer[7] += change(money, 10);
      money = money % 10;
    } else if (money >= 1) {
      answer[8] += change(money, 1);
      money = money % 1;
    }
  }
  return answer;
}

function change(money, amount) {
  return Math.floor(money / amount);
}

module.exports = problem5;
