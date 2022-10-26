function problem1(pobi, crong) {

}

function pointCompare(pobiPoint, crongPoint) {
  if (pobiPoint == crongPoint) return 0;
  if (pobiPoint > crongPoint) return 1;
  if (pobiPoint < crongPoint) return 2;
}

function digitSum(...arr) {
  const firstArr = arr[0][0].toString().split("").map(x => parseInt(x));
  const firstNum = firstArr.reduce((a,b) => (a+b));

  const secondArr = arr[0][1].toString().split("").map(x => parseInt(x));
  const secondNum = secondArr.reduce((a,b) => (a+b));

  return Math.max(firstNum, secondNum);
}

function digitMul(...arr) {
  const firstArr = arr[0][0].toString().split("").map(x => parseInt(x));
  const firstNum = firstArr.reduce((a,b) => (a*b));

  const secondArr = arr[0][1].toString().split("").map(x => parseInt(x));
  const secondNum = secondArr.reduce((a,b) => (a*b));

  return Math.max(firstNum, secondNum);
}

module.exports = problem1;

// 기능들
// 1. 예외상황(첫장 끝장, 페이지수가 이상할때)
// 2. 각 자리수 나눠서 더하기
// 3. 각 자리수 나눠서 곱하기
// 4. 비교해서 결과값 도출