function problem5(money) {
  var answer;
  return answer;
}

const countExchangeableMoneyPerUnit = (money, unitOfMoney) => {
  return Math.floor(money / unitOfMoney);
};

const calculateMoneyChange = (money, unitOfMoney) => {
  return money % unitOfMoney;
};

module.exports = problem5;
