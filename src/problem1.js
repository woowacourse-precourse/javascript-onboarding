const getSplittedNumber = (number) => {
  return number
    .toString()
    .split("")
    .map((item) => Number(item));
};
const getSumOfNumber = (number) => {
  const splittedNumber = getSplittedNumber(number);
  const sum = splittedNumber.reduce(
    (accumulator, currentNumer) => accumulator + currentNumer,
    0
  );

  return sum;
};
const getProductOfNumber = (number) => {
  const splittedNumber = getSplittedNumber(number);
  const product = splittedNumber.reduce(
    (accumulator, currentNumer) => accumulator * currentNumer,
    1
  );

  return product;
};
const getMaximumNumber = ([leftPage, rightPage]) => {
  const maximumLeftPage = Math.max(
    getSumOfNumber(leftPage),
    getProductOfNumber(leftPage)
  );
  const maximumRightPage = Math.max(
    getSumOfNumber(rightPage),
    getProductOfNumber(rightPage)
  );
  const maximumNumber = Math.max(maximumLeftPage, maximumRightPage);

  return maximumNumber;
};

const checkExceptionEvenOrOdd = ([leftPage, rightPage]) => {
  return leftPage % 2 !== 1 || rightPage % 2 !== 0;
};
const checkExceptionConsecutive = ([leftPage, rightPage]) => {
  return rightPage - leftPage !== 1;
};
const checkExceptionPageRange = ([leftPage, rightPage]) => {
  return leftPage < 0 || rightPage > 400;
};
const checkException = (pobi, crong) => {
  let exception = false;
  if (checkExceptionEvenOrOdd(pobi) || checkExceptionEvenOrOdd(crong)) {
    exception = true;
  }
  if (checkExceptionConsecutive(pobi) || checkExceptionConsecutive(crong)) {
    exception = true;
  }
  if (checkExceptionPageRange(pobi) || checkExceptionPageRange(crong)) {
    exception = true;
  }

  return exception;
};

function problem1(pobi, crong) {
  const EXCEPTION_OCCURRED = -1;
  const DRAW = 0;
  const POBI_WIN = 1;
  const CRONG_WIN = 2;

  let answer;

  if (checkException(pobi, crong)) {
    return EXCEPTION_OCCURRED;
  }

  const pobiMaximumNumber = getMaximumNumber(pobi);
  const crongMaximumNumber = getMaximumNumber(crong);

  if (pobiMaximumNumber > crongMaximumNumber) answer = POBI_WIN;
  if (pobiMaximumNumber < crongMaximumNumber) answer = CRONG_WIN;
  if (pobiMaximumNumber === crongMaximumNumber) answer = DRAW;

  return answer;
}

module.exports = problem1;
