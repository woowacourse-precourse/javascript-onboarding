// 주어진 단위에 대해 순차적으로 나누어 결과를 구하는 problem5 함수 구현

function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let leftMoney = money;
  return units.map((unit) => {
    const remainder = leftMoney % unit;
    const quotient = Math.floor(leftMoney / unit);
    leftMoney = remainder;
    return quotient;
  });
}

module.exports = problem5;
