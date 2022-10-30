function problem5(money) {
  var answer;
  const mUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let withdraw = [];

  for (i = 0; i < mUnit.length; i++) {
    withdraw.push(howManyMoneys(money, mUnit[i]));
    money = money % mUnit[i];
  }

  answer = withdraw;

  return answer;
}

function howManyMoneys(money, mUnit) {
  return parseInt(money / mUnit);
}

module.exports = problem5;

/*
1. 매개변수로 들어온 돈이 몇 개 변환될 수 있는지 count하는 함수
2. 오만 원권 ~ 일원 동전 값이 들어있는 배열을 값이 큰 순서대로 1의 함수에 대입
3. 결과 배열(withdraw)에 반환값 저장 후 return
*/
