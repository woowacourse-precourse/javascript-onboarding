//페이지 유효성 검사
const isValidPage = (book1, book2) => {
  if (book1[0] <= 1 || book1[1] >= 400 || book2[0] <= 1 || book2[1] >= 400)
    return false;
  else if (book1[1] - book1[0] !== 1) return false;
  else if (book2[1] - book2[0] !== 1) return false;
  else return true;
};

// 각 자리수를 더해서 반환하는 함수
const sum = (num) => {
  const numToString = num.toString().split("");
  let sum = 0;
  numToString.forEach((n) => {
    sum += Number(n);
  });

  return sum;
};

// 각 자리수를 곱해서 반환하는 함수
const mul = (num) => {
  const numToString = num.toString().split("");
  let mul = 1;

  numToString.forEach((n) => {
    mul *= Number(n);
  });

  return mul;
};

// 2, 3번의 최대 값을 반환하는 함수
const maxNum = (book) => {
  let max = 0;

  book.forEach((page) => {
    let sumResult = sum(page);
    let mulResult = mul(page);
    if (sumResult >= mulResult) max = sumResult;
    if (sumResult < mulResult) max = mulResult;
  });

  return max;
};

function problem1(pobi, crong) {}

// 여기에 테스트

module.exports = problem1;
