function problem5(money) {
  const changes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];

  changes.map((change) => {
    result.push(Math.floor(money / change));
    money %= change;
  });

  return result;
}

// console.log(problem5(50237));
// console.log(problem5(15000));

module.exports = problem5;
