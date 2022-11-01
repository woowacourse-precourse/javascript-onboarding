// test sample 추가
console.log(problem1([99, 102], [211, 212]));

function problem1(pobi, crong) {
  // maxNumber 비교 후 점수 return

  let pobiScore = maxNumber(sumPage(pobi), multiPage(pobi));
  let crongScore = maxNumber(sumPage(crong), multiPage(crong));

  // case별 점수 return
  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  if (pobiScore === crongScore) return 0;
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
