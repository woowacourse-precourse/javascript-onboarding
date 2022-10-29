const LAST_PAGE = 400;

function problem1(pobi, crong) {
  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;

  let maxPobi = maxNum(pobi);
  let maxCrong = maxNum(crong);
  if (maxPobi > maxCrong) return 1;
  if (maxPobi < maxCrong) return 2;
  if (maxPobi === maxCrong) return 0;
}

//페이지 유효성 검사
function isValidPage(book) {
  if (book.length !== 2) return false;
  if (book[0] < 1 || book[1] > LAST_PAGE) return false;
  if (book[1] - book[0] !== 1) return false;
  if (book[1] % 2 !== 0) return false;
  else return true;
}

// 2, 3번의 최대 값을 반환하는 함수
function maxNum(book) {
  let max = 0;

  book.forEach((page) => {
    let sumResult = sum(page);
    let mulResult = mul(page);
    max = Math.max(sumResult, mulResult);
  });

  return max;
}

// 각 자리수를 더해서 반환하는 함수
function sum(num) {
  const numToString = num.toString().split("");
  let sum = numToString.reduce((m, n) => m + Number(n), 0);

  return sum;
}

// 각 자리수를 곱해서 반환하는 함수
function mul(num) {
  const numToString = num.toString().split("");
  let mul = numToString.reduce((m, n) => m * Number(n), 1);

  return mul;
}

module.exports = problem1;
