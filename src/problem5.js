function problem5(money) {
  const M = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const ans = {
    50000: 0,
    10000: 0,
    5000: 0,
    1000: 0,
    500: 0,
    100: 0,
    50: 0,
    10: 0,
    1: 0,
  };
  let answer = [];

  for (i = 0; i < M.length; i++) {
    if (money >= M[i]) {
      const m = String(M[i]);
      ans[m] = parseInt(money / M[i]);
      money = money % M[i];
    }
  }

  for (i = 8; i >= 0; i--) {
    console.log(Object.keys(ans)[i]);
    answer.push(ans[Object.keys(ans)[i]]);
  }
  return answer;
}

module.exports = problem5;
