function problem1(pobi, crong) {
  if (!errorCheck(pobi)) return -1;
  if (!errorCheck(crong)) return -1;
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

function errorCheck(page) {
  const left = page[0];
  const right = page[1];
  if (
    left % 2 === 0 ||
    right % 2 === 1 ||
    left <= 1 ||
    right <= 1 ||
    left >= 400 ||
    right >= 400 ||
    left - right !== -1 ||
    typeof left !== "number" ||
    typeof right !== "number" ||
    page.length > 2 ||
    page.length === 0
  )
    return false;
  return true;
} // 왼쪽 페이지가 짝수인지 확인 필요

// 입력값 타입에 따른 에러처리
