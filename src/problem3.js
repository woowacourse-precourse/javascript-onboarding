function problem3(number) {
  let answer = 0; // 이후 재할당이 일어날 변수를 보통 let으로 선언한다고 함
  /* 1~number까지 순회하며 3,6,9 숫자 counting */
  for (let current = 1 ; current <= number ; current++) {
    answer += getClapCount(current);
  }
  return answer;
}

/* 파라미터로 받은 숫자에 3,6,9 숫자가 몇개 들어있는지 확인하는 함수
    각 자릿수가 3,6,9 중 하나인지 확인
      -> 5자리라면 5번의 비교가 발생, 1~10000까지 비교시 50000이 안되는 비교가 발생
*/
function getClapCount(number) {
  let count = 0;
  while (number > 0) {
    const unit = number % 10;
    number = (number - unit) / 10;
    count += isClap(unit) ? 1 : 0;
  }
  return count;
}

function isClap(unit) {
  if (unit === 0) return 0;
  return unit % 3 === 0;
}

problem3(33);

module.exports = problem3;
