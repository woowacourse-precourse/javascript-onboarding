/**
 * 기준 금액으로 원금을 나눈 몫을 연산하고, 정답 배열에 넣어주는 함수
 * @param {number} remain 연산 후 남은 금액
 * @param {array} cash 원금을 나누는 기준이 되는 금액들이 들어있는 배열
 * @param {array} ans 원금을 기준이 되는 금액으로 나눈 몫이 들어있는 배열
 * @returns 원금을 기준이 되는 금액으로 나눈 몫을 원소로 가지는 배열
 */
function calculator(remain, cash, ans) {
  for (let i = 0; i < cash.length; i++) {
    const quotient = Math.floor(remain / cash[i]);

    remain -= cash[i] * quotient;

    ans.push(quotient);
  }

  return ans;
}

function problem5(money) {
  // 큰 금액부터 나눗셈 연산을 진행하게 되므로
  // 큰 금액이 정답 배열 앞쪽에 위치하게 된다.
  const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let ans = [];
  let remain = money;

  return calculator(remain, cash, ans);
}

module.exports = problem5;
