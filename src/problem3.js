// 1. 인자가 1이상 10000이하의 수인지 확인
// 2. 인자에 따른 반환값 계산 함수 구현

function validInputCheck(number) {
  if (number < 1 || number > 10000) {
    return -1;
  }
  if (!Number.isInteger(number)) {
    return -1;
  }
  return 0;
}

function isClap(number) {
  let count = 0;

  while (number > 0) {
    if (number % 10 === 3 || number % 10 === 6 || number % 10 === 9) {
      count += 1;
    }
    number = parseInt(number / 10);
  }
  return count;
}

function countClap(number) {
  let count = 0;

  for (let index = 1; index <= number; index++) {
    count += isClap(index);
  }
  return count;
}

function problem3(number) {
  if (validInputCheck(number) < 0) {
    return "Argument Error";
  }
  var answer = countClap(number);

  return answer;
}

module.exports = problem3;
