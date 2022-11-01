function problem5(money) {
  let moneyWithdraw = money;
  let fiftyThousandCount = parseInt(moneyWithdraw / 50000);
  let moneyLeft = moneyWithdraw - fiftyThousandCount * 50000;
  let tenThousandCount = parseInt(moneyLeft / 10000);
  moneyLeft = moneyLeft - tenThousandCount * 10000;
  let fiveThousandCount = parseInt(moneyLeft / 5000);
  moneyLeft = moneyLeft - fiveThousandCount * 5000;
  let thousandCount = parseInt(moneyLeft / 1000);
  moneyLeft = moneyLeft - thousandCount * 1000;
  let fiveHundredCount = parseInt(moneyLeft / 500);
  moneyLeft = moneyLeft - fiveHundredCount * 500;
  let hundredCount = parseInt(moneyLeft / 100);
  moneyLeft = moneyLeft - hundredCount * 100;
  let tenCount = parseInt(moneyLeft / 10);
  moneyLeft = moneyLeft - tenCount * 10;
  let oneCount = moneyLeft;

  let answer = [
    fiftyThousandCount,
    tenThousandCount,
    fiveThousandCount,
    thousandCount,
    fiveHundredCount,
    hundredCount,
    tenCount,
    oneCount,
  ];

  return answer;
}

module.exports = problem5;
