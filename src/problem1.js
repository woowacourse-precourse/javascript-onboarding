function problem1(pobi, crong) {
  var answer;
  if (exceptionCase(pobi) || exceptionCase(crong)) return -1;
  getDigitSum(pobi[0]);
  getDigitSum(pobi[1]);
  getDigitSum(crong[0]);
  getDigitSum(crong[1]);
  getDigitMultiply(pobi[0]);
  getDigitMultiply(pobi[1]);
  getDigitMultiply(crong[0]);
  getDigitMultiply(crong[1]);
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

function getDigitSum(page) {
  let sum = 0; //sum을 0으로 초기화한다.
  while (page > 0) {
    //page가 0이 될 때까지
    sum += page % 10; //page의 1의 자릿수를 더한 다음,
    page = parseInt(page / 10); //page의 1의 자릿수는 버린다.
  }
  return sum;
}

function getDigitMultiply(page) {
  let multiply = 1; //multiply를 1로 초기화한다.
  while (page > 0) {
    //page가 0이 될 때까지
    multiply *= page % 10; //page의 1의 자릿수를 곱한 다음,
    page = parseInt(page / 10); //page의 1의 자릿수는 버린다.
  }
  return multiply;
}

module.exports = problem1;
