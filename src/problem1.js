const isValidBook = function (book) {
  const [left, right] = book;
  const isValidNum = left % 2 === 1 && right % 2 === 0;
  const isValidRange = !book.includes(1) && !book.includes(400);
  const isValidCondition = !!left && !!right && left + 1 === right;
  return isValidNum && isValidRange && isValidCondition;
};

const getDigitsArr = function (page) {
  return page.toString().split("").map(Number);
};

const getDigitsSum = function (pageArr) {
  return pageArr.reduce((acc, cur) => acc + cur, 0);
};

const getDigitsMultiplication = function (pageArr) {
  return pageArr.reduce((acc, cur) => acc * cur, 1);
};

const getMaxNum = function (num1, num2) {
  return Math.max(num1, num2);
};

const getMaxScore = function ([left, right]) {
  const leftNumArr = getDigitsArr(left);
  const leftSum = getDigitsSum(leftNumArr);
  const leftMultiplication = getDigitsMultiplication(leftNumArr);

  const rightNumArr = getDigitsArr(right);
  const rightSum = getDigitsSum(rightNumArr);

  const rightMultiplication = getDigitsMultiplication(rightNumArr);
  const leftMax = getMaxNum(leftSum, leftMultiplication);
  const rightMax = getMaxNum(rightSum, rightMultiplication);
  return getMaxNum(leftMax, rightMax);
};

const judgeWinner = function (pobiMax, crongMax) {
  if (pobiMax > crongMax) return 1;
  if (pobiMax < crongMax) return 2;
  return 0;
};

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
