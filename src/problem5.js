function problem5(money) {
  let answer = [];
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let unit of units) {
    answer.push(parseInt(money / unit));
    money = money % unit;
  }
  return answer;
}

module.exports = problem5;
