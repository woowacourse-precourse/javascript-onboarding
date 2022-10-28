function problem5(money) {
  let moneyCopy = money;
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let count;
  let i = 0;
  while (i < moneyArr.length) {
    count = Math.floor(moneyCopy / moneyArr[i]);
    moneyCopy -= moneyArr[i] * count;
    moneyArr[i] = count;
    i++;
  }
  return moneyArr;
}

module.exports = problem5;
