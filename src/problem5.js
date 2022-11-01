function problem5(money) {
  const MIN_MONEY = 1;
  const MAX_MONEY = 1000000;

  if (money < MIN_MONEY || money > MAX_MONEY) {
    throw new Error('money는 1이상 1,000,000이하여야 합니다.');
  }

  const currencyKoreaDominations = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const convertMoneyToCurrencyCallback = (currency) => {
    const CurrencyCount = Math.floor(money / currency);
    money = money % currency;
    return CurrencyCount;
  };

  return currencyKoreaDominations.map(convertMoneyToCurrencyCallback);
}

module.exports = problem5;
