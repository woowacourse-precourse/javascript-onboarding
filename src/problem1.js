function problem1(pobi, crong) {
  var answer;
  return answer;
}
function sumDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}
function multiplyDigits(number) {
  let multiple = 1;
  while (number > 0) {
    multiple *= number % 10;
    number = Math.floor(number / 10);
  }
  return multiple;
}
module.exports = problem1;
