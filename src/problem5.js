function problem5(money) {
  let moneyCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let moneyLeft = money;

  for (let i = 0; i < moneys.length; i++) {
    let count = Math.trunc(moneyLeft / moneys[i]);
    moneyCount[i] = count;
    moneyLeft -= moneys[i] * count;
  }

  return moneyCount;
}

module.exports = problem5;
