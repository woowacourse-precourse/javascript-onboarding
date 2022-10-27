function problem5(money) {
  var moneyMap = new Map([
    [50000, 0],
    [10000, 0],
    [5000, 0],
    [1000, 0],
    [500, 0],
    [100, 0],
    [50, 0],
    [10, 0],
    [1, 0],
  ]);
  1;

  for (let change of moneyMap.keys()) {
    moneyMap.set(change, parseInt(money / change));
    money %= change;
  }

  var answer = [];
  for (let number of moneyMap.values()) {
    answer.push(number);
  }

  return answer;
}

console.log(problem5(50237));

module.exports = problem5;
