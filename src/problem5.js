function problem5(money) {
  var answer;
  if (!validType(money)) throw new Error("잘못된 타입입니다.");
  if (!validRange(money)) throw new Error("잘못된 범위입니다.");

  answer = changeMoney(money);
  return answer;
}

function changeMoney(money) {
  const changedMoney = []
  const moneyArray = [50000, 10000, 5000, 1000, 100, 50, 10, 1];

  while (money > 0) {
    for (let i = 0; i < moneyArray.length; i++) {
      changedMoney.push(parseInt(money / moneyArray[i]));
      money = money % moneyArray[i];
    }
  }

  return changedMoney;
}

function validRange(money) {
  return 1 <= money && money <= 1000000;
}

function validType(money) {
  return typeof (money) == "number" && money % 1 == 0;
}

module.exports = problem5;