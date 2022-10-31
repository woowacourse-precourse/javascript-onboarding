function problem5(money) {
  var answer;

  money_list = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  while (money >= 50000) {
    money_list[0] += 1;
    money = money - 50000;
  }

  while (money >= 10000) {
    money_list[1] += 1;
    money = money - 10000;
  }

  while (money >= 5000) {
    money_list[2] += 1;
    money = money - 5000;
  }

  while (money >= 1000) {
    money_list[3] += 1;
    money = money - 1000;
  }

  while (money >= 500) {
    money_list[4] += 1;
    money = money - 500;
  }
  while (money >= 100) {
    money_list[5] += 1;
    money = money - 100;
  }
  while (money >= 50) {
    money_list[6] += 1;
    money = money - 50;
  }
  while (money >= 10) {
    money_list[7] += 1;
    money = money - 10;
  }
  while (money >= 1) {
    money_list[8] += 1;
    money = money - 1;
  }

  answer = money_list;

  return answer;
}

module.exports = problem5;
