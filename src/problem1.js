function problem1(pobi, crong) {
  var answer;

  if (validExceptions(pobi, crong)) {
    answer = selectWinner(pobi, crong);
    return answer;
  }

  return -1;
}

function sumDigits(num) {
  let sumResult = 0;
  while (num > 0) {
    sumResult += num % 10;
    num = parseInt(num / 10);
  }

  return sumResult;
}

function multiplyDigits(num) {
  let multiplyResult = 1;
  while (num > 0) {
    multiplyResult *= num % 10;
    num = parseInt(num / 10);
  }

  return multiplyResult;
}

function selectWinner(pobi, crong) {
  const pobiNumber = Math.max(sumDigits(pobi[0]), sumDigits(pobi[1]), multiplyDigits(pobi[0]), multiplyDigits(pobi[1]));
  const crongNumber = Math.max(sumDigits(crong[0]), sumDigits(crong[1]), multiplyDigits(crong[0]), multiplyDigits(crong[1]));

  if (pobiNumber == crongNumber) return 0;
  else if (pobiNumber > crongNumber) return 1;
  else return 2;
}

function validRange(arr) {
  return arr.every((item) => item < 1 || 400 < item)
}

function validPage(arr) {
  if (arr[0] % 2 == 0 || arr[1] % 2 == 1) return false;
  return true;
}

function validContinuous(arr) {
  if (arr[0] + 1 != arr[1]) return false;
  return true;
}

function validExceptions(arr1, arr2) {
  const range = validRange(arr1) && validRange(arr2);
  const page = validPage(arr1) && validPage(arr2);
  const continuous = validContinuous(arr1) && validContinuous(arr2);

  return range && page && continuous;
}

module.exports = problem1;
