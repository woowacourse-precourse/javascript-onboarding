const targetMoneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

const problem5 = (money) => {
  let results = [];

  const pushMoneyCount = (targetMoney) => {
    if (money >= targetMoney) {
      const quotient = Math.floor(money / targetMoney);

      results = [...results, quotient];
      money -= targetMoney * quotient;
    } else {
      results = [...results, 0];
    }
  };

  targetMoneyList.forEach((targetMoney) => pushMoneyCount(targetMoney));

  return results;
};

module.exports = problem5;
