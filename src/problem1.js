// 예외처리를 위한 상수값 지정
const PAGE_LENGTH = 2;
const FIRST_PAGE = 1;
const LAST_PAGE = 400;

// 입력값 예외처리
const checkValid = (pageArr) => {
  let flag = true;
  if(pageArr[1] - pageArr[0] !== 1) flag = false;
  if(pageArr.length !== PAGE_LENGTH) flag = false;
  if(pageArr[0] < FIRST_PAGE || pageArr[1] > LAST_PAGE) flag = false;
  return flag;
}

// 각 자리 숫자 더하기
const sumAllDigit = (num) => {
  let numArr = String(num).split("").map(x=>+x);
  return numArr.reduce((acc, cur) => acc + cur, 0);
}

// 각 자리 숫자 곱하기
const multiplyAllDigit = (num) => {
  let numArr = String(num).split("").map(x=>+x);
  return numArr.reduce((acc, cur) => acc * cur, 1);
}

// 4가지 값 중에서 가장 큰 값 구하기
const calcMaxNum = (arr) => {
  return Math.max(sumAllDigit(arr[0]), sumAllDigit(arr[1]), multiplyAllDigit(arr[0]), multiplyAllDigit(arr[1]));
}

// 메인 함수(점수를 계산하고 결과값 도출)
function problem1(pobi, crong) {
  let result;
  const pobiScore = calcMaxNum(pobi);
  const crongScore = calcMaxNum(crong);

  if(!checkValid(pobi) || !checkValid(crong)) result = -1;

  return result;
}

module.exports = problem1;
