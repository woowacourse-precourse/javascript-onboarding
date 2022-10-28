//해당 금액이 필요한지 확인하는 함수
function isNeed(money, won) {
  if (money / won >= 1) return true;
  return false;
}

//필요하다면 몇개가 필요한지 세주는 함수
function countNeedMoney(money, won) {
  return Math.floor(money / won);
}

function problem5(money) {
  //지폐 개수를 위한 배열
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  //전체 돈에 대한 배열
  let moneyIndex = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
}

module.exports = problem5;
