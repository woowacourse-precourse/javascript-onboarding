function problem5(money) {
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let curMoney = money;

  return moneyType.map((type) => {
    let quotient = parseInt(curMoney / type);
    curMoney = curMoney % type;
    return quotient;
  });
}

module.exports = problem5;
