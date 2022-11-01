const getSum = (page) => {
  return page
    .toString()
    .split("")
    .reduce((prev, cur) => prev + Number(cur), 0);
};

const getMult = (page) => {
  return page
    .toString()
    .split("")
    .reduce((prev, cur) => prev * Number(cur), 1);
};

const getMax = (pages) => {
  let max = 0;

  pages.forEach((page) => {
    const sum = getSum(page);
    const mult = getMult(page);
    max = Math.max(sum, mult);
  });

  return max;
};

const isValid = (pages) => {
  if (pages.length > 2) return false;

  const [left, right] = [pages[0], pages[1]];
  if (left === 1 || right === 400) return false;
  if (left % 2 === 0 || right % 2 === 1) return false;
  if (left < 1 || right > 400) return false;
  if (left + 1 !== right) return false;
  return true;
};

function problem1(pobi, crong) {
  const pobiMax = getMax(pobi);
  const crongMax = getMax(crong);

  if (!isValid(pobi) || !isValid(crong)) return -1;
  if (pobiMax > crongMax) return 1;
  if (pobiMax < crongMax) return 2;
  if (pobiMax === crongMax) return 0;

  return answer;
}

module.exports = problem1;
