// 0. 입력된 페이지가 2페이지 인지 검사
// 1. 1과 400 사이의 숫자인지 검사
// 2. 홀수, 짝수 순서 검사
// 3. 자리수 별로 덧셈 곱셈 함수 구현
// 4. 자리수 별로 모두 더하고 모두 곱한뒤 가장 큰 값 반환
// 5. 포비, 크롱 점수 비교 후 승자 반환

function validPageCheck(value) {
  if (value[1] - value[0] !== 1) {
    return -1;
  }
  if (value[0] % 2 === 0) {
    return -1;
  }
  if (value[0] <= 1 || value[0] >= 399) {
    return -1;
  }
  if (value[1] <= 2 || value[1] >= 400) {
    return -1;
  }
  return 0;
}

function validPageInputCheck(firstValue, secondValue) {
  if (firstValue.length !== 2 || secondValue.length !== 2) {
    return -1;
  }
  return 0;
}

function validTest(firstValue, secondValue) {
  if (validPageInputCheck(firstValue, secondValue) < 0) {
    return -1;
  }
  if (validPageCheck(firstValue) < 0) {
    return -1;
  }
  if (validPageCheck(secondValue) < 0) {
    return -1;
  }
  return 0;
}

function problem1(pobi, crong) {
  if (validTest(pobi, crong) < 0) {
    return -1;
  }
  var answer;
  return answer;
}

module.exports = problem1;
