function problem1(pobi, crong) {
  let answer;
  let pobiScore = getMaxNum(pobi);
  let crongScore = getMaxNum(crong);

  if (!exceptionError(pobi, crong)) return -1;

  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore) answer = 2;
  else answer = 0;
  return answer;
}

// 페이지의 덧셈과 곱셈 중 큰 수를 구하는 함수
function getMaxNum(arr) {
  const left = arr[0];
  const right = arr[1];
  let leftMax = Math.max(getSum(left), getMulti(left))
  let rightMax = Math.max(getSum(right), getMulti(right))
  return leftMax >= rightMax ? leftMax : rightMax;
}

// 덧셈을 구하는 함수
function getSum(num) {
  return num.toString().split('').reduce((acc, cur) => acc += Number(cur), 0);
}

// 곱셈을 구하는 함수
function getMulti(num) {
  return num.toString().split('').reduce((acc, cur) => acc *= Number(cur), 1);
}

// 예외처리
function exceptionError(pobi, crong) {
  if (!Array.isArray(pobi) || !Array.isArray(crong)) return false;
  if (pobi.length !== 2 || crong.length !== 2) return false;
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return false;
  return true;
}

module.exports = problem1;