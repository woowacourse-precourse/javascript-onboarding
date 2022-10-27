function problem5(money) {
  if (validateCash(money)) {
    return getCash(money);
  }
  return -1;
}

const getCash = (money) => {
  const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return cash.map((currentCash) => {
    const result = Math.floor(money / currentCash);
    money = money % currentCash;
    return result;
  });
};

const validateCash = (money) => {
  if (typeof money !== 'number') {
    return false;
  }
  if (money < 1 || money > 1000000) {
    return false;
  }
  return true;
};

module.exports = problem5;
