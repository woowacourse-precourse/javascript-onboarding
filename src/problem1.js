function problem1(pobi, crong) {
}

// 각 자리 숫자를 모두 더해 그 결과를 반환하는 함수
function digitPlus(digit) {
  let result = digit%10;
  digit = Math.floor(digit/10);
  while(digit > 0) {
    result += digit%10;
    digit = Math.floor(digit/10);
  }
  return result;
}

// 각 자리 숫자를 모두 곱해 그 결과를 반환하는 함수
function digitMult(digit) {
  let result = digit%10;
  digit = Math.floor(digit/10);
  while(digit > 0) {
    result *= digit%10;
    digit = Math.floor(digit/10);
  }
  return result;
}

// 인자로 받은 배열의 최대값을 반환하는 함수
function getMax(array) {
  const max = Math.max(digitPlus(array[0]), digitPlus(array[1]), digitMult(array[0]), digitMult(array[1]));
  return max;
}

// 왼쪽, 오른쪽 페이지가 정상인지 확인하는 함수
function isWeird(array) {
  if(array[0] === array[1] - 1) {
    return false;
  }
  return true;
}
module.exports = problem1;
