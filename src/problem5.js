function problem5(money) {
  let copiedMoney = money;
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (i = 0; i < answer.length; i++) {
    const canDivideValue = canDivide(copiedMoney, i);
    if (canDivideValue !== false) {
      answer[i] = canDivideValue.quotient;
      copiedMoney = canDivideValue.remainder;
    }
  }
  return answer;
}

module.exports = problem5;
