function problem5(money) {
  const currencyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = new Array(currencyUnits.length).fill(0);

  currencyUnits.reduce((restMoney, unit, index) => {
    const count = Math.floor(restMoney / unit);
    answer[index] = count;

    return restMoney % unit;
  }, money);

  return answer;
}

module.exports = problem5;
