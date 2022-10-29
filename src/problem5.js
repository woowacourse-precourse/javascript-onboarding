function problem5(money) {
  var answer;
  moneyArr = [];
  var cal = 50000;
  for (i = 0; i < 8; i++) {
    if (i % 2 == 0) {
      moneyArr.push(parseInt(money / cal));
      money %= cal;
      cal /= 5;
    } else if (i % 2 !== 0) {
      moneyArr.push(parseInt(money / cal));
      money %= cal;
      cal = cal / 2;
    }
  }
  cal = cal / 5;
  moneyArr.push(parseInt(money / cal));
  answer = moneyArr;
  return answer;
}

module.exports = problem5;
