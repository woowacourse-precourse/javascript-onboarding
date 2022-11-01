function problem5(money) {
  let moenyCount = [];

  let moneyCollection = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

  for (let won of moneyCollection) {
    moenyCount.push(Math.floor(money / won))
    money %= won
  }
  return moenyCount;
}

module.exports = problem5;