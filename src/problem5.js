function problem5(money) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer = [];

  for (let temp of currency) {
    answer.push(Math.floor(money / temp));
    money %= temp;
  }
  return answer;
}

module.exports = problem5;
