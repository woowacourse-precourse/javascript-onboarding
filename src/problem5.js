/*
  기능 목록
  1. 주어진 금액을 기준 금액에 따라 나누어 몫을 배열에 저장
*/

function division(money, index) {
  const criteria = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const dividedMoney = parseInt(money / criteria[index]);
  if (index !== 8)
    return [dividedMoney].concat(
      division(money - dividedMoney * criteria[index], ++index)
    );
  else return [dividedMoney];
}

function problem5(money) {
  return division(money, 0);
}

module.exports = problem5;
