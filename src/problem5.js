const targetMoneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

const problem5 = (money) => {
  let answer = [];

  const pushMoneyCount = (targetMoney) => {
    if (money >= targetMoney) {
      const quotient = Math.floor(money / targetMoney);

      answer = [...answer, quotient];
      money -= targetMoney * quotient;
    } else answer = [...answer, 0];
  };

  return answer;
};

module.exports = problem5;
