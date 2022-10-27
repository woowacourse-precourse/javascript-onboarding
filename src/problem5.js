function problem5(money) {
  let answer = Array(9).fill(0);
  let possibleChange = [50_000, 10_000, 5_000, 1_000, 500, 100, 50, 10, 1];
  let moneyLeft = money;

  for (let i = 0; i < possibleChange.length; i++) {
    while (moneyLeft >= possibleChange[i]) {
      moneyLeft = changeBill(moneyLeft, possibleChange[i]);
      answer[i]++;
    }
  }

  return answer;
}

function changeBill(money, bill) {
  money = money - bill;
  return money;
}

module.exports = problem5;

/**
 * money에서 while문으로 오만원권 ~ 일원 동전까지 반복하며 차감
 */
