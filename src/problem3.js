const CLAB_NUMBERS = [3, 6, 9];

function problem3(number) {
  let totalClabCount = 0;

  for (let i = 1; i <= number; i += 1) {
    totalClabCount += getClabCount(i);
  }

  return totalClabCount;
}

function getClabCount(number) {
  const clabNumberSet = new Set(CLAB_NUMBERS);
  let num = number;
  let clabCount = 0;

  while (num !== 0) {
    const digit = num % 10;
    const hasClabNumber = clabNumberSet.has(digit);

    if (hasClabNumber) clabCount += 1;

    num = Math.floor(num / 10);
  }

  return clabCount;
}

module.exports = problem3;
