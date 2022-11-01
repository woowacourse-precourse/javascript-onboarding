function problem5(money) {
  var answer = [];
  let typeOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  answer[0] = Math.floor(money / 50000);
  for (let i = 1; i < 9; i++) {
    answer[i] = Math.floor((money % typeOfMoney[i - 1]) / typeOfMoney[i]);
  }
  return answer;
}

module.exports = problem5;
