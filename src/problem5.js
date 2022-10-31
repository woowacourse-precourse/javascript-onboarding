function problem5(money) {
  var answer = [];
  let n50000 = 0;
  let n10000 = 0;
  let n5000 = 0;
  let n1000 = 0;
  let n500 = 0;
  let n100 = 0;
  let n50 = 0;
  let n10 = 0;
  let n1 = 0;

  while (money >= 50000) {
    money = money - 50000;
    n50000++;
  }
  while (money >= 10000) {
    money = money - 10000;
    n10000++;
  }
  while (money >= 5000) {
    money = money - 5000;
    n5000++;
  }
  while (money >= 1000) {
    money = money - 1000;
    n1000++;
  }
  while (money >= 500) {
    money = money - 500;
    n500++;
  }
  while (money >= 100) {
    money = money - 100;
    n100++;
  }
  while (money >= 50) {
    money = money - 50;
    n50++;
  }
  while (money >= 10) {
    money = money - 10;
    n10++;
  }
  while (money >= 1) {
    money = money - 1;
    n1++;
  }

  answer.push(n50000, n10000, n5000, n1000, n500, n100, n50, n10, n1);

  return answer;
}

module.exports = problem5;