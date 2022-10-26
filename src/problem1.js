function problem1(pobi, crong) {
  var answer;
  return answer;
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
  if (rightPage - leftPage === 1) return true;
  return false;
};

const getMaxPointOfPage = (pageNum) => {
  return Math.max(sumAllDigit(pageNum), multiplyAllDigit(pageNum));
};

module.exports = problem1;
