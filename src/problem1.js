function problem1(pobi, crong) {
  var answer;
  answer = resultCalc(pobi, crong);
  return answer;
}

module.exports = problem1;

//시작 번호와 끝번호 상수 선언
const PAGE_START = 1;
const PAGE_END = 400;

//랜덤한 숫자가 홀수인지 짝수인지 판별하는 함수  //이미 isOdd 같은건 없나?
function isEven(num) {
  if (num % 2 === 0) return true;
  else return false;
}

//숫자 리터럴을 배열로 변환하는 함수
function numToArr(num) {
  origin = num.toString().split("");
  arr = origin.map(Number);
  return arr;
}

//배열의 숫자를 계산해서 높은값을 리턴하는 함수
// sum 값이 높은지 확인하여 sum과 multi 중 반환값을 결정.
function pageResult(arr) {
  const sumResult = arr.reduce((a, b) => a + b);
  const multipleResult = arr.reduce((a, b) => a * b);

  return sumResult > multipleResult ? sumResult : multipleResult;
}

//배열의 숫자를 처리 하는 함수 //
function calcPage(arr) {
  [start, next] = [...arr];

  const startPage = numToArr(start);
  const nextPage = numToArr(next); //페이지 숫자를 숫자 배열로 변환

  const startResult = pageResult(startPage);
  const nextResult = pageResult(nextPage); //숫자 배열에서 계산된 값중 높은값을 반환

  return startResult > nextResult ? startResult : nextResult; // 높은 숫자를 리턴
}

//메인 함수 answer 에 값을 반환하기 위한 함수
function resultCalc(pobi, crong) {
  if (vaildate(pobi) || vaildate(crong)) {
    return -1;
  }

  const pobiNumber = calcPage(pobi);
  const crongNumber = calcPage(crong);

  return pobiNumber > crongNumber
    ? 1
    : crongNumber > pobiNumber
    ? 2
    : pobiNumber === crongNumber
    ? 0
    : -1;
}

//페이지의 길이검사, 페이지의 연속성검사 , 페이지 범위 검사
function vaildate(page) {
  if (page.length !== 2 || page[0] + 1 !== page[1]) {
    return true;
  }
  if (page[0] < PAGE_START || page[0] > PAGE_END || isEven(page[0])) {
    return true;
  }
}
