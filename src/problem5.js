function problem5(money) {
  var answer = [];
  const moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  moneys.forEach((m) => {
    answer.push(Math.floor(money / m));
    money = money % m;
  });
  return answer;
}

module.exports = problem5;
