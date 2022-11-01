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
module.exports = problem1;
