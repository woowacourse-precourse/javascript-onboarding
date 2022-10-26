function problem1(pobi, crong) {
  var answer;
  return answer;
}

function digitSum(number) {
  let result = 0;
  while (number != 0) {
    result += Math.trunc(number % 10);
    number = Math.trunc(number / 10);
  }
  return result;
}

function digitMultiply(number) {
  let result = 1;
  while (number != 0) {
    result *= Math.trunc(number % 10);
    number = Math.trunc(number / 10);
  }
  return result;
}

module.exports = problem1;
