function problem5(money) {
  const currencyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  return currencyUnits.reduce((prevResult, currencyUnit) => {
    if (money >= currencyUnit) {
      const unitCount = Math.floor(money / currencyUnit);
      prevResult.push(unitCount);
      money %= currencyUnit;

      return prevResult;
    }

    prevResult.push(0);
    return prevResult;
  }, []);
}

module.exports = problem5;
