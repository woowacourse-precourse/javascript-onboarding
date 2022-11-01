function problem5(money) {
  if (money < 1 || money > 1000000) {
    return "money value error"
  }
  let answer = [];
  const money_list = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (item of money_list) {
    answer.push(Math.floor(money / item));
    money %= item;
  }
  return answer;
}

module.exports = problem5;
