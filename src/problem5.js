function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const MONEY_ARRAY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < MONEY_ARRAY.length; i++) {
    if (money == 0) {
      break;
    }
    answer[i] = parseInt(money / MONEY_ARRAY[i]);
    money = money % MONEY_ARRAY[i];
  }
  return answer;
}

module.exports = problem5;
