const splitNumber = (number) => {
  const numberToString = number.toString();
  const splittedNumber = numberToString.split("");
  const stringToNumber = splittedNumber.map((item) => Number(item));
  return stringToNumber;
};
const sumOfNumber = (number) => {
  const splittedNumber = splitNumber(number);
  const sum = splittedNumber.reduce(
    (accumulator, currentNumer) => accumulator + currentNumer,
    0
  );
  return sum;
};
const productOfNumber = (number) => {
  const splittedNumber = splitNumber(number);
  const product = splittedNumber.reduce(
    (accumulator, currentNumer) => accumulator * currentNumer,
    1
  );
  return product;
};
const findMaximumNumber = (book) => {
  const [leftPage, rightPage] = book;
  const maximumLeftPage = Math.max(
    sumOfNumber(leftPage),
    productOfNumber(leftPage)
  );
  const maximumRightPage = Math.max(
    sumOfNumber(rightPage),
    productOfNumber(rightPage)
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

  const pobiMax = findMaximumNumber(pobi);
  const crongMax = findMaximumNumber(crong);

  if (pobiMax > crongMax) answer = POBI_WIN;
  if (pobiMax < crongMax) answer = CRONG_WIN;
  if (pobiMax === crongMax) answer = DRAW;
  return answer;
}

module.exports = problem1;
