function problem5(money) {
  var answer;
  if (!validType(money)) throw new Error("잘못된 타입입니다.");
  if (!validRange(money)) throw new Error("잘못된 범위입니다.");

  answer = changeMoney(money);
  return answer;
}


/**
 * 금액을 변환하는 메소드
 * @param {number} money 변환 대상 금액
 * @returns {number[]} 변환 후 각 금액별 갯수를 담고있는 배열
 */
function changeMoney(money) {
  const changedMoney = [];
  const moneyArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < moneyArray.length; i++) {
    changedMoney.push(parseInt(money / moneyArray[i]));
    money = money % moneyArray[i];
  }

  return changedMoney;
}


// 예외 처리
function validRange(money) {
  return 1 <= money && money <= 1000000;
}

function validType(money) {
  return typeof (money) == "number" && money % 1 == 0;
}

module.exports = problem5;