function problem5(money) {
  let change = money;
  const result = [];
  const listAmounts = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < listAmounts.length; i++) {
    result.push(Math.floor(change / listAmounts[i]));
    change = change % listAmounts[i];
  }
  return result;
}

console.log(problem5(15000));

module.exports = problem5;
