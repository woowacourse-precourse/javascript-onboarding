// 기능 요구 사항
// 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전
// 각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아 return 한다.
// - [o] money / 50000 -> money %= 50000
// - [o] money / 10000 -> money %= 10000
// - [o] ... 과정 반복하면서 answer 배열에 값 push

function problem5(money) {
  let answer = [];
  answer.push(parseInt(money / 50000));
  money = money % 50000;
  answer.push(parseInt(money / 10000));
  money = money % 10000;
  answer.push(parseInt(money / 5000));
  money = money % 5000;
  answer.push(parseInt(money / 1000));
  money = money % 1000;
  answer.push(parseInt(money / 500));
  money = money % 500;
  answer.push(parseInt(money / 100));
  money = money % 100;
  answer.push(parseInt(money / 50));
  money = money % 50;
  answer.push(parseInt(money / 10));
  money = money % 10;
  answer.push(money);
  return answer;
}

console.log(problem5(50237));
module.exports = problem5;
