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

const checkEvenOrOdd = (book) => {
  let exception = false;
  const [leftPage, rightPage] = book;
  if (leftPage % 2 !== 1) {
    exception = true;
  }
  if (rightPage % 2 !== 0) {
    exception = true;
  }
  return exception;
};
const checkConsecutiveNumber = (book) => {
  let exception = false;
  const [leftPage, rightPage] = book;
  if (rightPage - leftPage !== 1) {
    exception = true;
  }
  return exception;
};
const checkException = (pobi, crong) => {
  let exception = false;
  if (checkEvenOrOdd(pobi) || checkEvenOrOdd(crong)) {
    exception = true;
  }
  if (checkConsecutiveNumber(pobi) || checkConsecutiveNumber(crong)) {
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
    answer = EXCEPTION_OCCURRED;
    return answer;
  }

  const pobiMax = findMaximumNumber(pobi);
  const crongMax = findMaximumNumber(crong);

  if (pobiMax > crongMax) answer = POBI_WIN;
  if (pobiMax < crongMax) answer = CRONG_WIN;
  if (pobiMax === crongMax) answer = DRAW;
  return answer;
}

module.exports = problem1;
