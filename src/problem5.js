function problem5(money) {
  var answer = [];
  var currencyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < currencyArr.length; i++) {
    const num = Math.floor(money / currencyArr[i]);

    answer.push(num);
    money = money - currencyArr[i] * num;
  }

  return answer;
}

module.exports = problem5;
