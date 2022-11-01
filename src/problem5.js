// 입력받은 money를 지폐와 동전으로 변환하는 함수
function problem5(money) {
  let answer = [];
  let charge = 0;
  charge = money/50000;
  answer.push(Math.floor(charge));
  money %= 50000;

  charge = money/10000;
  answer.push(Math.floor(charge));
  money %= 10000;

  charge = money/5000;
  answer.push(Math.floor(charge));
  money %= 5000;

  charge = money/1000;
  answer.push(Math.floor(charge));
  money %= 1000;

  charge = money/500;
  answer.push(Math.floor(charge));
  money %= 500;

  charge = money/100;
  answer.push(Math.floor(charge));
  money %= 100;

  charge = money/50;
  answer.push(Math.floor(charge));
  money %=50;

  charge = money/10;
  answer.push(Math.floor(charge));
  money %= 10;

  charge = money
  answer.push(Math.floor(charge));
  return answer;
}

module.exports = problem5;
