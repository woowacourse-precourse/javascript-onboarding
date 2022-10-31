function problem5(money) {
  var answer;

  if (violationChk(money)) {
    answer = counter(money);
  }

  return answer;
}

function violationChk(money) {
  // 입력된 금액이 1 ~ 1000000원 사이인지 검사
  return money >= 1 && money <= 1000000;
}

// 화폐 계수기 함수
function counter(money) {
  // 화폐 단위
  var currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var result = [];
  var currentMoney = money;

  // 화폐 단위 개수만큼 반복
  for (let i = 0; i < currency.length; i++) {
    result[i] = parseInt(currentMoney / currency[i]);
    currentMoney = parseInt(currentMoney % currency[i]);
  }

  return result;
}

module.exports = problem5;
