function problem5(money) {
  let total = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  var result = [];

  for (let i = 0; i < total.length; i++) {
    result.push(Math.floor(money / total[i]))
    money %= total[i];
  }
  return result;
}

module.exports = problem5;
