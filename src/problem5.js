function getEachMonetaryUnitCountiInOrderOfLargeAmounts(money) {
  const monetaryUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const monetaryUnitCounts = [];

  monetaryUnits.forEach((unit) => {
    const quotient = Math.floor(money / unit);

    monetaryUnitCounts.push(quotient);
    money -= quotient * unit;
  });

  return monetaryUnitCounts;
}

function problem5(money) {
  const answer = getEachMonetaryUnitCountiInOrderOfLargeAmounts(money);

  return answer;
}

module.exports = problem5;
