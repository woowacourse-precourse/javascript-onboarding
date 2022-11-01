function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // [ 오만원, 만원, 오천원, 천원, 오백원, 백원, 오십원, 십원, 일원 ]
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let restMoney = money;
  let idx = 0;

  while (restMoney) {
    if (restMoney / units[idx] >= 1) {
      answer[idx] += parseInt(restMoney / units[idx]);
      restMoney %= units[idx];
    }
    idx += 1;
  }
  return answer;
}

module.exports = problem5;
