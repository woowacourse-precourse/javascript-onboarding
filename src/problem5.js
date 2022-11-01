function problem5(money) {
  const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = new Array(9).fill(0);

  //가장 높은 단위의 금액부터 나누어진 몫으로 갯수 더하기
  for (let i = 0; i < moneyUnit.length; i++) {
    answer[i] += parseInt(money / moneyUnit[i]);
    money = money % moneyUnit[i];
  }

  return answer;
}

module.exports = problem5;
