function problem5(money) {
  var answer;
  answer = moneyChange(money);
  return answer;
}

module.exports = problem5;

const MONEY_LOW = 1;
const MONEY_HIGH = 1000000;

function isMoney(money) {
  if (money < MONEY_LOW || money > MONEY_HIGH) return fasle;
  if (typeof money === "number") return true;
  else return false;
}

function moneyChange(money) {
  if (!isMoney(money)) {
    alert("돈을 넣어야 합니다");
    return;
  }
  let tempMoney = money;
  const moneyStep = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let exchange = [];
  for (let i = 0; i < moneyStep.length; i++) {
    const result = Math.floor(tempMoney / moneyStep[i]);
    exchange[i] = result;
    tempMoney = tempMoney % moneyStep[i];
  }
  return exchange;
}
