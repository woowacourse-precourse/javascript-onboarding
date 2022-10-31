function problem1(pobi, crong) {
  var answer = checkValidation(pobi, crong) ? getWinner(pobi, crong) : -1;
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
function compareNumber(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}
function getMaxNumber(array) {
  sumMax = compareNumber(sumDigits(array[0]), sumDigits(array[1]));
  mulMax = compareNumber(multiplyDigits(array[0]), multiplyDigits(array[1]));
  return compareNumber(sumMax, mulMax);
}
function getWinner(pobi, crong) {
  const pobiMax = getMaxNumber(pobi);
  const crongMax = getMaxNumber(crong);
  if (pobiMax == crongMax) return 0;
  else if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else return -1;
}
function checkValidation(array1, array2) {
  const continuous = checkContinuous(array1) && checkContinuous(array2);
  const range = checkRange(array1) && checkRange(array2);
  const sniffling = checkSniffling(array1) && checkSniffling(array2);
  return continuous && range && sniffling;
}
function checkContinuous(array) {
  if (array[0] + 1 == array[1]) return true;
  else return false;
}
function checkRange(array) {
  let check = false;
  array.forEach((num) => {
    if (num >= 1 && num <= 400) check = true;
  });
  return check;
}
function checkSniffling(array) {
  if (array[0] % 2 == 1 && array[1] % 2 == 0) return true;
  else return false;
}
module.exports = problem1;
