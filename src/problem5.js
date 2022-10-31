// 의사 코드 작성
// 1. [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1] 배열 생성
// 2. 인자 money를 위 배열을 순회하여 나눠가면서 값을 변경하기

function problem5(money) {
  let answer = [];
  let moneyKind = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  moneyKind.map(el => {
    answer.push(Math.floor(money / el));
    money %= el;
  });

  return answer;
}

module.exports = problem5;
