// 1. 지폐 배열 생성
// 2. 지폐 배열을 순회하며 큰 지폐부터 갯수 추가
// 3. 원래 금액에서 뺀 지폐 만큼 차감 & 금액 최신화

//지폐 배열 생성
const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  var answer = [];

  // 지폐 배열 순회
  moneyUnit.forEach((unit) => {
    // 큰 지폐부터 추가
    count = parseInt(money / unit);
    answer.push(count);

    // 나머지 금액 최신화
    money = money % unit;
  });
  return answer;
}

module.exports = problem5;
