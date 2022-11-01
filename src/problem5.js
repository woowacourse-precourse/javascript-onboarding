function problem5(money) {
  const KRW = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let wallet = KRW.map((won) => {
    count = Math.floor(money / won)
    money = money % won

    return count;
  })
  return wallet;
}

module.exports = problem5;
