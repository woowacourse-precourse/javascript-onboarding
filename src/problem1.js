

//예외상황 판별(첫장 끝장, 페이지가 이상할때, pobi,crong의길이는 2, 왼쪽페이지는 홀수이다.)
function exception(arr) {
  if (arr[0] == 1 || arr[1] == 400) return true;
  if (arr[0] !== arr[1] - 1) return true;
  if (arr.length !== 2) return true;
  if (arr[0] % 2 === 0) return true;
  
  return false;
}

//각 자리수 나눠서 더하기
function addDigit(arr) {
  const firstArr = arr[0].toString().split("").map(x => parseInt(x));
  const firstNum = firstArr.reduce((a,b) => (a+b));

  const secondArr = arr[1].toString().split("").map(x => parseInt(x));
  const secondNum = secondArr.reduce((a,b) => (a+b));

  return Math.max(firstNum, secondNum);
}

//각 자리수 나눠서 곱하기
function mulDigit(arr) {
  const firstArr = arr[0].toString().split("").map(x => parseInt(x));
  const firstNum = firstArr.reduce((a,b) => (a*b));

  const secondArr = arr[1].toString().split("").map(x => parseInt(x));
  const secondNum = secondArr.reduce((a,b) => (a*b));

  return Math.max(firstNum, secondNum);
}

// 비교해서 결과값 도출
function comparePoint(pobiPoint, crongPoint) {
  if (pobiPoint == crongPoint) return 0;
  if (pobiPoint > crongPoint) return 1;
  if (pobiPoint < crongPoint) return 2;
}

// 더하기 곱하기 중 큰 값 구하기
function getBigNum(point) {
  return Math.max(addDigit(point),mulDigit(point));
}

function problem1(pobi, crong) {
  if (exception(pobi) || exception(crong)) return -1;

  const pobiPoint = getBigNum(pobi);
  const crongPoint = getBigNum(crong);
  return comparePoint(pobiPoint, crongPoint);
}

problem1([13,14], [17,18])

module.exports = problem1;