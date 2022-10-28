function problem1(pobi, crong) {
  var answer;
  if (exceptionCase(pobi) || exceptionCase(crong)) return -1;
  return answer;
}

function exceptionCase(arr) {
  //예외 사항 처리 함수, 예외 사항인 경우 true를 반환
  //페이지 번호가 1부터 400 사이의 범위 밖인 경우
  if (arr[0] < 1 || arr[0] > 400 || arr[1] < 1 || arr[1] > 400) return true;

  //페이지 번호가 자연수가 아닌 경우
  if (arr[0] % 1 !== 0 || arr[1] % 1 !== 0) return true;

  //왼쪽 페이지 번호가 홀수가 아닌 경우
  if (arr[0] % 2 === 0) return true;

  //오른쪽 페이지 번호가 짝수가 아닌 경우
  if (arr[1] % 2 !== 0) return true;

  //두 페이지가 연속된 숫자가 아닌 경우
  if (arr[1] !== arr[0] + 1) return true;
}

module.exports = problem1;
