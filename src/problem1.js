function problem1(pobi, crong) {
  let answer;

  if (!isValidPages(pobi) || !isValidPages(crong)) {
    return (answer = -1);
  }

  return answer;
}
const isValidPages = (pages) => {
  if (pages[1] - pages[0] != 1) {
    return false;
  } else if (pages[0] <= 1 || pages[1] >= 400) {
    return false;
  } else {
    return true;
  }
};
const getDigitSum = (num) => {
  return num
    .toString()
    .split("")
    .reduce((prev, cur) => prev + Number(cur), 0);
};
const getDigitProduct = (num) => {
  return num
    .toString()
    .split("")
    .reduce((prev, cur) => prev * Number(cur), 1);
};
const getMaxScore = (pages) => {
  return Math.max(
    getDigitSum(pages[0]),
    getDigitSum(pages[1]),
    getDigitProduct(pages[0]),
    getDigitProduct(pages[1])
  );
};

module.exports = problem1;
