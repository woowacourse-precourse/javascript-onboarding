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
  var answer;
  return answer;
}

module.exports = problem5;
