// test sample 추가
console.log(problem1([97, 98], [197, 198]));

function problem1(pobi, crong) {
  // maxNumber 비교 후 점수 return
  answer = maxNumber(pobi[0], pobi[1]);
  return answer;
}

// 페이지 번호 각 자리 숫자 더하는 함수
function sumPage(pages) {
  let firstSum = pages[0]
    .toString()
    .split("")
    .reduce((x, y) => +x + +y, 0);

  let secondSum = pages[1]
    .toString()
    .split("")
    .reduce((x, y) => +x + +y, 0);

  let sumPages = firstSum + secondSum;

  return sumPages;
}

// 페이지 번호 각 자리 숫자 곱하는 함수
function multiPage(pages) {
  let firstMulti = pages[0]
    .toString()
    .split("")
    .reduce((x, y) => +x * +y, 1);

  let secondMulti = pages[1]
    .toString()
    .split("")
    .reduce((x, y) => +x * +y, 1);

  let multiPages = firstMulti * secondMulti;

  return multiPages;
}

// 큰 수 return 함수
function maxNumber(num1, num2) {
  // 숫자 두 개 비교
  let biggerNum = Math.max(num1, num2);

  return biggerNum;
}

// 예외처리 함수
function checkProblem(pages) {
  // leftPage 홀수, rightPage 짝수
  // leftPage + 1 = rightPage
  // leftPage || rightPage > 0
  // legtPage || rightPage < 401
}

module.exports = problem1;
