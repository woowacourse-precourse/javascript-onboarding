/** 기능 목록
 *  1. 돈 목록이 담긴 배열 생성
 *  2. 입력받은 금액을 돈 목록으로 나누어 몫을 구하고,
 *  나머지를 다시 입력받은 금액에 할당
 */

function problem5(money) {
  const moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const result = moneyList.reduce((acc, cur) => {
    const numberOfMoney = Math.floor(money / cur);
    money = money % cur;
    acc.push(numberOfMoney);
    return acc;
  }, []);

  return result;
}

module.exports = problem5;
