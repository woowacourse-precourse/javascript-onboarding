/**
 *
 * @param {*} money
 * @returns
 *
 * 기능 구현
 * 돈의 액수를 큰 금액의 화폐로 나누는 함수 정의
 * 화폐로 나눈 몫을 세어서 결과 배열에 넣기
 * 돈이 일의 단위가 될 때까지 반복하는 반복문 정의
 */

function problem5(money) {
  const coinBox = new Array(9).fill(0);
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  function coinChanger(total, unit, coinBoxIndex) {
    if (total >= unit) {
      const needCoin = Number.parseInt(total / unit);
      coinBox[coinBoxIndex] += needCoin;
      total = total - unit * needCoin;
    }
    return total;
  }

  for (let i = 0; i < coinBox.length; i++) {
    money = coinChanger(money, units[i], i);
  }
  return coinBox;
}

module.exports = problem5;
