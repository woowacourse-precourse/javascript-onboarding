const CLAB_NUMBERS = [3, 6, 9];

function problem3(number) {
  var answer;
  return answer;
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
