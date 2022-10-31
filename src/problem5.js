// 기능 구현 목록
// - 화폐종류 & answer 을 담을 배열 생성
// - 남은돈을 화폐로 변환하는 함수 생성
// - 큰 금액부터 화폐로 변환
// - 1원 화폐 개수 추가

function problem5(money) {
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  function divideMoney(total, operator, index) {
    const moneyCnt = parseInt(total / operator);
    answer[index] += moneyCnt;
    const remainMoney = total % operator;
    money = remainMoney;
    return;
  }

  for (let i = 0; i < moneyArr.length; i++) {
    divideMoney(money, moneyArr[i], i);
  }

  if (money !== 0) {
    answer[answer.length - 1] = money;
  }

  return answer;
}

module.exports = problem5;
