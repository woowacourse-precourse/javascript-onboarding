function problem5(money) {
  const num = money;
  const str = String(num);
  const mapfn = (arg) => Number(arg);
  const moneyArr = str.split("").map(mapfn);
  const wallet = [];

  moneyArr.forEach((el, i) => {
    if (el === moneyArr[moneyArr.length - 1] && moneyArr[i - 1] !== 0) {
      wallet.push(moneyArr[moneyArr.length - 1]);
    }
    if (el / 5 > 0 && el / 1 > 0 && el !== moneyArr[moneyArr.length - 1]) {
      wallet.push(Math.floor(el / 5));
    }
    if (el / 5 < 1 && el / 1 > 0) {
      wallet.push(Math.floor(el / 1));
    }
    if (moneyArr[i - 1] % 5 === 0 && el / 1 < 1 && moneyArr[i - 1] > 0) {
      wallet.push(0);
    }
    if (moneyArr[i - 1] % 5 === 0 && el / 5 < 1 && el / 1 < 1) {
      wallet.push(0);
    }
    if (el === 0 && moneyArr[i - 1] !== 0) {
      wallet.push(0);
    }
  });
  return wallet;
}

module.exports = problem5;
