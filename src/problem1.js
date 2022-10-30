function problem1(pobi, crong) {
  if (checkException(pobi) === -1 || checkException(crong) === -1) return -1;
}

function checkException(arr) {
  if (arr.length !== 2) return -1;
  if (arr[1] - arr[0] !== 1) return -1;
  if (arr.some((item) => item <= 1 || item >= 400)) return -1;
  return 1;
}

function multiplyPage(num) {
  let ret = 1;
  while (parseInt(num / 10) !== 0) {
    ret *= num % 10;
    num = parseInt(num / 10);
  }
  ret *= num;
  return ret;
}
function addPage(num) {
  let ret = 0;
  while (parseInt(num / 10) !== 0) {
    ret += num % 10;
    num = parseInt(num / 10);
  }
  ret += num;
  return ret;
}
function getMax(a, b) {
  return a > b ? a : b;
}

module.exports = problem1;
