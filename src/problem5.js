function problem5(money) {
  let answer = [];
  let coin = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (const c of coin) {
    answer.push(parseInt(money / c));
    money = money % c;
  }

  return answer;
}

module.exports = problem5;
