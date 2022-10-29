// 특정 숫자에서 박수를 몇번 칠지 세어주는 함수
function getClapCount(num) {
  let count = 0;
  while (num) {
    if (num % 10 === 3 || num % 10 === 6 || num % 10 === 9) {
      count++;
    }

    num = parseInt(num / 10);
  }
  return count;
}

function problem3(number) {
  let answer = 0;

  // 0번부터 number까지 getClapCount()함수 결과 계속 호출
  for (let i = 1; i <= number; i++) {
    answer += getClapCount(i);
  }
  return answer;
}

module.exports = problem3;
