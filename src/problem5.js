function problem5(money) {
  var answer = [];
  let currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < currency.length; i++) {
    if (money >= currency[i]) {
      answer.push(parseInt(money / currency[i]));
      money = money % currency[i];
    } else {
      answer.push(0);
    }
  }
  return answer;
}

module.exports = problem5;
