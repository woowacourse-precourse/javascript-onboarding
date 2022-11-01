const LAST_PAGE = 400;

function problem1(pobi, crong) {
  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;

  const maxPobi = maxNum(pobi);
  const maxCrong = maxNum(crong);
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
  const numList = [];

  book.forEach((page) => {
    numList.push(sum(page));
    numList.push(mul(page));
  });

  return Math.max(...numList);
}

// 각 자리수를 더해서 반환하는 함수
function sum(num) {
  const numToString = num.toString().split("");
  const sum = numToString.reduce((m, n) => m + Number(n), 0);

  return sum;
}

// 각 자리수를 곱해서 반환하는 함수
function mul(num) {
  const numToString = num.toString().split("");
  const mul = numToString.reduce((m, n) => m * Number(n), 1);

  return mul;
}

module.exports = problem1;
