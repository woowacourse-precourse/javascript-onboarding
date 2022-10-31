function calculator(cash, ans, remain) {
  for (let i = 0; i < cash.length; i++) {
    const quotient = Math.floor(remain / cash[i]);

    remain -= cash[i] * quotient;

    ans.push(quotient);
  }

  return ans;
}

function problem5(money) {
  if (money < 1 || money > 1000000) {
    return;
  }

  const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let ans = [];
  let remain = money;

  return calculator(cash, ans, remain);
}

module.exports = problem5;
