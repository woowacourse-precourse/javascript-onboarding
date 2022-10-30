const isNextPage = (left, right) => {
  return right - left === 1;
};
const isLeftOdd = (num) => {
  return num % 2 === 1;
};

const isRightEven = (num) => {
  return num % 2 === 0;
};

const isInvalidPageRange = (left, right) => {
  return left < 2 || right < 2 || left > 399 || right > 399;
};

const isValidPage = (page) => {
  const [left, right] = page;

  if (!isNextPage(left, right)) return false;
  if (!isLeftOdd(left)) return false;
  if (!isRightEven(right)) return false;
  if (isInvalidPageRange(left, right)) return false;

  return true;
};

const digitsSum = (digits) => {
  return digits.reduce((num_1, num_2) => Number(num_1) + Number(num_2));
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
