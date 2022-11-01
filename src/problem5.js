function problem5(money) {
  const moneyTable = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];
  let leftMoney = money;

  for (const unitOfMoney of moneyTable) {
    answer.push(countExchangeableMoneyPerUnit(leftMoney, unitOfMoney));
    leftMoney = calculateMoneyChange(leftMoney, unitOfMoney);
  }
  return answer;
}

const countExchangeableMoneyPerUnit = (money, unitOfMoney) => {
  return Math.floor(money / unitOfMoney);
};

const calculateMoneyChange = (money, unitOfMoney) => {
  return money % unitOfMoney;
};

module.exports = problem5;
