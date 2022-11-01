function exchangeMoney(money, cashInBank, safe) {
  safe.moneyExchanged.push(Math.floor(money / cashInBank));
  safe.change = money % cashInBank;
  return safe;
}

function cannotExchangeMoney(safe) {
  safe.moneyExchanged.push(0);
  return safe;
}

function exchangeCash(money, cashInBank, safe) {
  const EXCHANGE_CRITERION = 1;
  if (money / cashInBank >= EXCHANGE_CRITERION) {
    return exchangeMoney(money, cashInBank, safe);
  }
  if (money / cashInBank < EXCHANGE_CRITERION) return cannotExchangeMoney(safe);
}

function problem5(money) {
  let safe = { moneyExchanged: [], change: money };
  const bank = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  bank.forEach((cashInBank) => {
    exchangeCash(money, cashInBank, safe);
  });
  return safe.moneyExchanged;
}

module.exports = problem5;
