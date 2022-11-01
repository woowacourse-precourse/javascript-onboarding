function getMoney(money) {
  let res = [];
  const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < won.length; i++) {
    res[i] = Math.floor(money / won[i]);
    money %= won[i];
  }
  return res;
}
function isRightMoney(money) {
  if (!(money > 0 && money < 1000000)) {
    return 0;
  } else if (!(typeof money == "number")) {
    return 0;
  }
  return 1;
}

function problem5(money) {
  if (isRightMoney(money) == 0) {
    return false;
  }
  return getMoney(money);
}

module.exports = problem5;
