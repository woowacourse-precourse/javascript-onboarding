function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const listOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  if (money >= 100000) {
    answer[0] += (money / 100000) * 2;
    money -= parseInt(money / 100000) * 100000;
  }
  for (let i = 0; i < 10; i++) {
    while (money >= listOfMoney[i]) {
      money -= listOfMoney[i];
      answer[i]++;
    }
  }
  return answer;
}

module.exports = problem5;
