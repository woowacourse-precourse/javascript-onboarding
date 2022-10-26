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

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
