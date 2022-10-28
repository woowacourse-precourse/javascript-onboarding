function problem5(money) {
  let answer = countMoneyType(money);
  return answer;
}

//화폐의 수를 구하는 기능
function countMoneyType(money) {
  //화폐의 종류를 가진 배열 선언
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let currentMoney = money;
  let countMoney = [];

  //단위가 큰 화폐부터 순회
  for (let i = 0; i < moneyType.length; i++) {
    //현재 금액을 화폐로 나눠 몫을 구함
    countMoney[i] = Math.floor(currentMoney / moneyType[i]);

    //나머지 값을 현재 금액으로 최신화
    currentMoney %= moneyType[i];
  }
  return countMoney;
}

module.exports = problem5;
