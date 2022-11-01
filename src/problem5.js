function isLimitMoney(money) {
  if (money >= 1 && money <= 1000000) return true;
  else return false;
}

function problem5(money) {
  var answer;

  if (isLimitMoney(money)) {
    let moneyNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    moneyNumber[0] = parseInt(money / 50000);
    money -= 50000 * moneyNumber[0];

    moneyNumber[1] = parseInt(money / 10000);
    money -= 10000 * moneyNumber[1];

    moneyNumber[2] = parseInt(money / 5000);
    money -= 5000 * moneyNumber[2];

    moneyNumber[3] = parseInt(money / 1000);
    money -= 1000 * moneyNumber[3];

    moneyNumber[4] = parseInt(money / 500);
    money -= 500 * moneyNumber[4];

    moneyNumber[5] = parseInt(money / 100);
    money -= 100 * moneyNumber[5];

    moneyNumber[6] = parseInt(money / 50);
    money -= 50 * moneyNumber[6];

    moneyNumber[7] = parseInt(money / 10);
    money -= 10 * moneyNumber[7];

    moneyNumber[8] = money;

    answer = moneyNumber;
    return answer;
  } else {
    console.log("1원 이상 1,000,000원 이하의 금액이어야 한다.");
    return;
  }
}

module.exports = problem5;
