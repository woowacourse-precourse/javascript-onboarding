function problem5(money) {
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  const moneyArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

  for (let i = 0; i < 9; i++) {
    let count = parseInt(money / moneyArray[i]);
    money %= moneyArray[i]
    result[i] = count
  }

  return result;
}

module.exports = problem5;
