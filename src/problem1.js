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

function exceptionCheck(array1, array2) {
  let isRightInput = true;

  if (array1.length != 2 || array2.length != 2) isRightInput = false;
  else if (array1[0] + 1 != array1[1]) isRightInput = false;
  else if (array2[0] + 1 != array2[1]) isRightInput = false;
  else if (array1[0] < 1 || 400 < array1[0]) isRightInput = false;
  else if (array1[1] < 1 || 400 < array1[1]) isRightInput = false;
  else if (array2[0] < 1 || 400 < array2[0]) isRightInput = false;
  else if (array2[1] < 1 || 400 < array2[1]) isRightInput = false;

  return isRightInput;
}

module.exports = problem1;
