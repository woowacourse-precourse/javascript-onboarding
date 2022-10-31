function problem5(money) {
  var answer = [];
  currencies = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  for (i =0; i<currencies.length;i++){
    answer.push(Math.floor(money/currencies[i]));
    money = money%currencies[i];
  }

  return answer;
}

module.exports = problem5;
