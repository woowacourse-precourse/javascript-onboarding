function isError(arr) {
  let [left, right] = arr;
  if (left < 1 || right > 400) return 1;
  if (left % 2 == 0) return 1;
  if (left + 1 !== right) return 1;
  return 0;
}
function pageNumSum(num) {
  let ret = 0;
  while (num) {
    ret = ret + (num % 10);
    num = Math.trunc(num / 10);
  }
  return ret;
}
function pageNumMult(num) {
  let ret = 1;
  while (num) {
    ret = ret * (num % 10);
    num = Math.trunc(num / 10);
  }
  return ret;
}
function problem1(pobi, crong) {
  var answer;
  return answer;
}
module.exports = problem1;
