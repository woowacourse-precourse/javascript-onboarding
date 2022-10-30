function problem5(money) {
  const moneyCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  moneyType.forEach((type, index) => {
    const typeCount = Math.floor(money / type);
    money -= type * typeCount;
    moneyCount[index] += typeCount;
  });

  return moneyCount;
}

module.exports = problem5;
