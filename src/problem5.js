function problem5(money) {
  let change = money;
  const result = [];
  // 사용할 돈의 단위
  const listAmounts = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < listAmounts.length; i++) {
    // 최대한 큰 단위로 나누기 반복
    result.push(Math.floor(change / listAmounts[i]));
    change = change % listAmounts[i];
  }
  return result;
}

module.exports = problem5;
