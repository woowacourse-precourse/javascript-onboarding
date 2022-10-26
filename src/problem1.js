function problem1(pobi, crong) {
  const pobiPoint = Math.max(digitSum(pobi),digitMul(pobi));
  const crongPoint = Math.max(digitSum(crong),digitMul(crong));


  return pointCompare(pobiPoint, crongPoint);
}

function pointCompare(pobiPoint, crongPoint) {
  if (pobiPoint == crongPoint) return 0;
  if (pobiPoint > crongPoint) return 1;
  if (pobiPoint < crongPoint) return 2;
}

function digitSum(...Arr) {
  const firstArr = Arr[0][0].toString().split("").map(x => parseInt(x));
  const firstNum = firstArr.reduce((a,b) => (a+b));

  const secondArr = Arr[0][1].toString().split("").map(x => parseInt(x));
  const secondNum = secondArr.reduce((a,b) => (a+b));

  return Math.max(firstNum, secondNum);
}

function digitMul(...Arr) {
  const firstArr = Arr[0][0].toString().split("").map(x => parseInt(x));
  const firstNum = firstArr.reduce((a,b) => (a*b));

  const secondArr = Arr[0][1].toString().split("").map(x => parseInt(x));
  const secondNum = secondArr.reduce((a,b) => (a*b));

  return Math.max(firstNum, secondNum);
}

function exception() {

}

problem1([111, 112], [97, 98]);

module.exports = problem1;

// 기능들
// 1. 예외상황(첫장 끝장, 페이지수가 이상할때)
// 2. 각 자리수 나눠서 더하기
// 3. 각 자리수 나눠서 곱하기
// 4. 비교해서 결과값 도출