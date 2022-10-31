function problem5(money) {
  const MoneyArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];


  for (let i of MoneyArray) {
    answer.push(Math.floor(Changes / i));
    Changes = Changes % i;
  }

  return answer;
}

module.exports = problem5;
