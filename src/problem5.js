// 기능 구현 목록
// - 화폐종류 & answer 을 담을 배열 생성
// - 남은돈을 화폐로 변환하는 함수 생성
// - 큰 금액부터 화폐로 변환
// - 1원 화폐 개수 추가

function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
  let totalMoney = money;

  function getMoneyCount(total, currentMoney) {
    const moneyCount = parseInt(total / currentMoney);
    return moneyCount;
  }

  function getRemainMoney(total, currentMoney) {
    const remainMoney = total % currentMoney;
    return remainMoney;
  }

  for (let i = 0; i < moneyArr.length; i++) {
    answer[i] += getMoneyCount(totalMoney, moneyArr[i]);
    totalMoney = getRemainMoney(totalMoney, moneyArr[i]);
  }

  if (totalMoney !== 0) {
    answer[answer.length - 1] = totalMoney;
  }

  return answer;
}

module.exports = problem5;
