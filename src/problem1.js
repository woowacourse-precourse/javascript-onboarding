const isValidNum = function ([left, right]) {
  return left % 2 === 1 && right % 2 === 0;
};
const isValidRange = function (book) {
  return !book.includes(1) && !book.includes(400);
};
const isValidCondition = function ([left, right]) {
  return !!left && !!right && left + 1 === right;
};

/**
 * 책의 유효성을 확인한다.
 * @param {[number, number]} book left 페이지와 right 페이지가 튜플로 들어있는 book
 * @returns {boolean} 유효성 여부
 */
const isValidBook = function (book) {
  return isValidNum(book) && isValidRange(book) && isValidCondition(book);
};

const getDigitsArr = function (page) {
  return page.toString().split("").map(Number);
};
const getDigitsSum = function (digitArr) {
  return digitArr.reduce((acc, cur) => acc + cur, 0);
};
const getDigitsMultiplication = function (digitArr) {
  return digitArr.reduce((acc, cur) => acc * cur, 1);
};
const getMaxNum = function (num1, num2) {
  return Math.max(num1, num2);
};

/**
 * 숫자의 자릿수 합, 곱 중 큰 값을 판단한다.
 * @param {number} num 페이지의 숫자
 * @returns {number} 합, 곱 중 큰 값
 */
const getMaxOfSumMul = function (num) {
  const leftNumArr = getDigitsArr(num);
  const leftSum = getDigitsSum(leftNumArr);
  const leftMultiplication = getDigitsMultiplication(leftNumArr);
  return getMaxNum(leftSum, leftMultiplication);
};

/**
 * 왼쪽, 오른쪽 페이지 중 큰 값을 구한다.
 * @param {[number, number]} book left 페이지와 right 페이지가 튜플로 들어있는 book
 * @returns {number} 왼쪽, 오른쪽 페이지 중 큰 값
 */
const getMaxScore = function ([left, right]) {
  return getMaxNum(getMaxOfSumMul(left), getMaxOfSumMul(right));
};

/**
 * pobi, crong의 승, 패, 무승부를 판단한다.
 * @param {number} pobiMax pobi의 책에서 구한 가장 큰 값
 * @param {number} crongMax crong의 책에서 구한 가장 큰 값
 * @returns {0 | 1 | 2} 무승부(0), 포비 승(1), 크롱 승(2)
 */
const judgeWinner = function (pobiMax, crongMax) {
  if (pobiMax > crongMax) return 1;
  if (pobiMax < crongMax) return 2;
  return 0;
};

/**
 * 문제 1: 포비와 크롱의 페이지 번호 게임(포비, 크롱 둘 중 게임의 규칙 상 값이 더 큰 책을 갖고 있으면 승리)
 * @param {[number, number]} pobi pobi의 책(left, right 페이지)
 * @param {[number, number]} crong crong의 책(left, right 페이지)
 * @returns {-1 | 0 | 1 | 2} 무효(-1), 무승부(0), 포비 승(1), 크롱 승(2)
 */
function problem1(pobi, crong) {
  if (!isValidBook(pobi) || !isValidBook(crong)) return -1;

  const pobiMax = getMaxScore(pobi);
  const crongMax = getMaxScore(crong);
  return judgeWinner(pobiMax, crongMax);
}

// 예외 케이스 테스트
// console.log(problem1([97, 98], [198, 197]));
// console.log(problem1([97, 98], [197, 199]));
// console.log(problem1([1, 2], [197, 199]));
// console.log(problem1([97, 98], [1, 2]));
// console.log(problem1([399, 400], [198, 199]));
// console.log(problem1([97, 98], [399, 400]));

module.exports = problem1;
