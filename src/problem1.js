//예외상황 판별(첫장 끝장, 페이지가 이상할때, pobi,crong의길이는 2, 왼쪽페이지는 홀수이다.)
function exception(arr) {
  if (arr[0] == 1 || arr[1] == 400) return true;
  if (arr[0] !== arr[1] - 1) return true;
  if (arr.length !== 2) return true;
  if (arr[0] % 2 === 0) return true;
  
  return false;
}

//각 자리수 나눠서 더하기
function digitSum(...arr) {
  const firstArr = arr[0][0].toString().split("").map(x => parseInt(x));
  const firstNum = firstArr.reduce((a,b) => (a+b));

  const secondArr = arr[0][1].toString().split("").map(x => parseInt(x));
  const secondNum = secondArr.reduce((a,b) => (a+b));

  return Math.max(firstNum, secondNum);
}

//각 자리수 나눠서 곱하기
function digitMul(...arr) {
  const firstArr = arr[0][0].toString().split("").map(x => parseInt(x));
  const firstNum = firstArr.reduce((a,b) => (a*b));

  const secondArr = arr[0][1].toString().split("").map(x => parseInt(x));
  const secondNum = secondArr.reduce((a,b) => (a*b));

  return Math.max(firstNum, secondNum);
}

// 비교해서 결과값 도출
function pointCompare(pobiPoint, crongPoint) {
  if (pobiPoint == crongPoint) return 0;
  if (pobiPoint > crongPoint) return 1;
  if (pobiPoint < crongPoint) return 2;
}

function problem1(pobi, crong) {
  if (exception(pobi) || exception(crong)) return -1;

  const pobiPoint = Math.max(digitSum(pobi),digitMul(pobi));
  const crongPoint = Math.max(digitSum(crong),digitMul(crong));

  return pointCompare(pobiPoint, crongPoint);
}

module.exports = problem1;

// 기능들
// 1. 예외상황 판별(첫장 끝장, 페이지수가 이상할때)
// 2. 각 자리수 나눠서 더하기
// 3. 각 자리수 나눠서 곱하기
// 4. 비교해서 결과값 도출