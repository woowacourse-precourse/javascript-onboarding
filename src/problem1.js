function problem1(pobi, crong) {
  var answer;

  if (vaildate(pobi) || vaildate(crong)) {
    return -1;
  }

  const pobiNumber = calcPage(pobi);
  const crongNumber = calcPage(crong);

  if (pobiNumber > crongNumber) answer = 1;
  else if (crongNumber > pobiNumber) answer = 2;
  else if (pobiNumber === crongNumber) answer = 0;

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

// ****** 테스트용 난수 생성 ******** //
// //1~ 399 페이지 난수 생성 함수  //범위를 가진 난수는 어떻게 만들지??
// function createPage() {
//   let page = Math.floor(Math.random() * (PAGE_END - PAGE_START)) + PAGE_START;

//   // 난수가 짝수인지 판별하기 위해
//   if (isEven(page)) return [page - 1, page];
//   else return [page, page + 1];
// }

//숫자 리터럴을 배열로 변환하는 함수
function numToArr(num) {
  origin = num.toString().split("");
  arr = origin.map(Number);
  return arr;
}

//배열의 숫자를 계산해서 높은값을 리턴하는 함수
function pageResult(arr) {
  const sumResult = arr.reduce((a, b) => a + b);
  const multipleResult = arr.reduce((a, b) => a * b);

  if (sumResult > multipleResult) return sumResult;
  else return multipleResult; // sum 값이 높은지 확인하여 sum과 multi 중 반환값을 결정.
}

//배열의 숫자를 처리 하는 함수 // 숫자나 문자를 배열로 만들어아하는데?
//리듀스 사용(누산값, 현재값)
function calcPage(arr) {
  [start, next] = [...arr];

  const startPage = numToArr(start);
  const nextPage = numToArr(next); //페이지 숫자를 숫자 배열로 변환

  const startResult = pageResult(startPage);
  const nextResult = pageResult(nextPage); //숫자 배열에서 계산된 값중 높은값을 반환

  if (startResult > nextResult) return startResult; // 높은 숫자를 리턴
  else return nextResult; //
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
