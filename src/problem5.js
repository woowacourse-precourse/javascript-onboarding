function problem5(money) {
  const monetaryUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const wallet = new Array(monetaryUnit.length).fill(0);

  monetaryUnit.forEach((unit, index) => {
    wallet[index] = Math.floor(money / unit);
    money = money % unit;
  });

  return wallet;
}

module.exports = problem5;
