function isFitLength(arr, length) {
  return arr.length === length;
}

function isRightOrder(arr) {
  const firstPage = arr[0];
  const secondPage = arr[arr.length - 1];
  return secondPage - firstPage === 1 && isEven(secondPage) && isOdd(firstPage);
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 === 1;
}

function isBoundRange(min, max, arr) {
  const firstPage = arr[0];
  const secondPage = arr[arr.length - 1];
  return (
    min <= firstPage &&
    firstPage <= max &&
    min <= secondPage &&
    secondPage <= max
  );
}

function isRightInput(arr) {
  const CORRECT_LENGTH = 2;
  const MIN_PAGE = 1;
  const MAX_PAGE = 400;
  return (
    isFitLength(arr, CORRECT_LENGTH) &&
    isRightOrder(arr) &&
    isBoundRange(MIN_PAGE, MAX_PAGE, arr)
  );
}

function findMax(num) {
  const numString = num + "";
  const digits = numString.split("").map((e) => +e);
  const summation = digits.reduce((acc, cur) => acc + cur);
  const product = digits.reduce((acc, cur) => acc * cur);

  return summation > product ? summation : product;
}

function findMaxScore(arr) {
  const firstPage = arr[0];
  const secondPage = arr[arr.length - 1];
  const firstPageMaxScore = findMax(firstPage);
  const secondPageMaxScore = findMax(secondPage);
  return firstPageMaxScore > secondPageMaxScore
    ? firstPageMaxScore
    : secondPageMaxScore;
}

function problem1(pobi, crong) {
  const EXCEPTION_COOE = -1;
  var answer = EXCEPTION_COOE;
  if (!isRightInput(pobi) || !isRightInput(crong)) return answer;
  const pobiMaxScore = findMaxScore(pobi);
  const crongMaxScore = findMaxScore(crong);

  return answer;
}

module.exports = problem1;
