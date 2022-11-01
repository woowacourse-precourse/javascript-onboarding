function problem5(money) {
  // money가 1 이상 1,000,000 이하인 자연수가 아닌 경우
  if (!Number.isInteger(money) || money < 1 || money > 1000000) {
    return false;
  }

  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const divideArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let resultMoney = money;
  for (let i = 0; i < answer.length; i++) {
    const quotient = Math.floor(resultMoney / divideArr[i]);
    answer[i] = quotient;
    resultMoney -= quotient * divideArr[i];
  }

  return answer;
}

module.exports = problem5;
