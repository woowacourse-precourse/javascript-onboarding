function problem5(money) {
  let answer = [];
  let currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < currency.length; i++) {
    answer.push(Math.floor(money / currency[i]));
    money = money % currency[i];
  }

  return answer;
}

module.exports = problem5;
