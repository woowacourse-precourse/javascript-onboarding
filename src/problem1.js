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

function maxNumber(number1, number2) {
  let result = Math.max(
    digitSum(number1),
    digitMultiply(number1),
    digitSum(number2),
    digitMultiply(number2)
  );
  return result;
}

module.exports = problem1;
