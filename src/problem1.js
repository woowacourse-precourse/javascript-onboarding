const checkPageRange = (page1, page2) => {
  if (page1[0] >= 1 && page1[1] <= 400 && page2[0] >= 1 && page2[1] <= 400)
    return true;
  return false;
};

const checkPageGap = (page1, page2) => {
  if (page1[1] - page1[0] === 1 && page2[1] - page2[0] === 1) return true;
  return false;
};

const checkOddEven = (page1, page2) => {
  if (
    page1[0] % 2 === 1 &&
    page2[0] % 2 === 1 &&
    page1[1] % 2 === 0 &&
    page2[1] % 2 === 0
  )
    return true;
  return false;
};

const checkLength = (page1, page2) => {
  if (page1.length === 2 && page2.length === 2) return true;
  return false;
};

const sumDigits = (num) => {
  let sum = 0;
  do {
    if (num < 0) break;
    sum += num % 10;
    num = Math.floor(num / 10);
  } while (num > 0);
  return sum;
};

const multiplyDigits = (num) => {
  let mul = 1;
  do {
    if (num < 0) break;
    mul *= num % 10;
    num = Math.floor(num / 10);
  } while (num > 0);
  return mul;
};

const getMaxNumber = (pages) => {
  const [left, right] = pages;
  let maxNumber = 0;
  maxNumber = Math.max(
    sumDigits(left),
    multiplyDigits(left),
    sumDigits(right),
    multiplyDigits(right)
  );
  return maxNumber;
};

function problem1(pobi, crong) {
  if (!checkPageRange(pobi, crong)) return -1;
  if (!checkPageGap(pobi, crong)) return -1;
  if (!checkOddEven(pobi, crong)) return -1;
  if (!checkLength(pobi, crong)) return -1;
}

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
