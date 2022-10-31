function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;

// function that returns the sum of digits
function digitSum(number) {
  let sum = 0;
  while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
  }
  return sum;
}

// function that returns multiplied digits
function digitMultiply(number) {
  let multiply = 1;
  while (number > 0) {
      multiply *= number % 10;
      number = Math.floor(number / 10);
  }
  return multiply;
}