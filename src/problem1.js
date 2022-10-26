function problem1(pobi, crong) {
  if (!pageValidCheck(pobi) || !pageValidCheck(crong)) return -1;

  const pobiScore = getMyPoint(pobi);
  const crongScore = getMyPoint(crong);

  if (pobiScore > crongScore) return 1;
  if (crongScore > pobiScore) return 2;
  return 0;
}

const sumAllDigit = (num) => {
  const stringDigitArray = Array.from(num.toString());
  return stringDigitArray.reduce((prev, current) => +prev + +current);
};

const multiplyAllDigit = (num) => {
  const stringDigitArray = Array.from(num.toString());
  return stringDigitArray.reduce((prev, current) => +prev * +current);
};

const pageValidCheck = (pageArray) => {
  const [leftPage, rightPage] = pageArray;
  if (rightPage % 2 === 0 && rightPage - leftPage === 1) return true;
  return false;
};

const getMaxPointOfPage = (pageNum) => {
  return Math.max(sumAllDigit(pageNum), multiplyAllDigit(pageNum));
};

const getMyPoint = (pageArray) => {
  const [leftPage, rightPage] = pageArray;
  return Math.max(getMaxPointOfPage(leftPage), getMaxPointOfPage(rightPage));
};

module.exports = problem1;
