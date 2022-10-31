function problem5(money) {
  let answer = [];

  // 각 금액 단위별 화폐 배열을 가진 변수 선언
  const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  // 필요한 화폐 갯수를 리턴해주는 기능 구현
  for (let i = 0; i < won.length; i++) {
    answer.push(Math.floor(money / won[i]));
    money = money % won[i];
  }

  return answer;
}

module.exports = problem5;
