function exchange(money, currency) {
  return Math.floor(money / currency);
}

function problem5(money) {
  const currencyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  return currencyList.reduce((result, currency, i) => {
    const currencyCount = exchange(money, currency);

    result[i] = currencyCount;
    money -= currency * currencyCount;

    return result;
  }, []);
}

module.exports = problem5;
