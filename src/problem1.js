function problem1(pobi, crong) {
  if (errorCheck(pobi) === -1) return -1;
  if (errorCheck(crong) === -1) return -1;
  if (LeftOrRight(pobi) === LeftOrRight(crong)) return 0;
  if (LeftOrRight(pobi) > LeftOrRight(crong)) return 1;
  if (LeftOrRight(pobi) < LeftOrRight(crong)) return 2;
}

module.exports = problem1;

function checkBigger(num) {
  let num_sum = num
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((sum, curr) => sum + curr, 0);
  let num_times = num
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((sum, curr) => sum * curr, 1);

  if (num_sum > num_times) {
    return num_sum;
  }
  return num_times;
}

function LeftOrRight(arr) {
  if (checkBigger(arr[0]) > checkBigger(arr[1])) {
    return checkBigger(arr[0]);
  } else {
    return checkBigger(arr[1]);
  }
}

function errorCheck(arr) {
  if (arr[0] != arr[1] - 1) return -1;
} // 왼쪽 페이지가 짝수인지 확인 필요
