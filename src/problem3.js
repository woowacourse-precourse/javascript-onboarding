// 1. 손뼉 횟수 계산 function 생성
// 2. 1~number 까지 손뼉 횟수를 각각 구해 더함
// 손뼉 횟수 계산
function countClap(num) {
  return String(num).match(/[3,6,9]/g)?.length || 0;
}

function problem3(number) {
  var answer = 0;
  // 1 ~ number 까지 더하기
  for (let i = 1; i <= number; i++) {
    answer += countClap(i);
  }
  return answer;
}

module.exports = problem3;
