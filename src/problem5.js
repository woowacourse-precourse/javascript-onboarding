function problem5(money) {
  var answer;
  let moneyArr = [9];
  for (i = 0; i < 9; i++) {
    moneyArr[i] = 0;
  }
  while (money) {
    if (50000 <= money) {
      moneyArr[0] = parseInt(money / 50000);
      money = money % 50000;
      moneyArr[1] = parseInt(money / 10000);
      money = money % 10000;
    } else if (10000 <= money) {
      moneyArr[1] = parseInt(money / 10000);
      money = money % 10000;
    } else if (5000 <= money) {
      moneyArr[2] = parseInt(money / 5000);
      money = money % 5000;
    } else if (1000 <= money) {
      moneyArr[3] = parseInt(money / 1000);
      money = money % 1000;
    } else if (500 <= money) {
      moneyArr[4] = parseInt(money / 500);
      money = money % 500;
    } else if (100 <= money) {
      moneyArr[5] = parseInt(money / 100);
      money = money % 100;
    } else if (50 <= money) {
      moneyArr[6] = parseInt(money / 50);
      money = money % 50;
    } else if (10 <= money) {
      moneyArr[7] = parseInt(money / 10);
      money = money % 10;
    } else {
      moneyArr[8] = money;
      money = 0;
    }
  }
  answer = moneyArr;
  return answer;
}

module.exports = problem5;
