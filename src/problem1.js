function isArrayIncludesZero(nums) {
  return nums.includes(0);
}

function calcMaxNumber(num) {
  const nums = num.toString().split("").map(Number);

  if (isArrayIncludesZero(nums)) {
    return nums.reduce((a, b) => a + b, 0);
  }

  return Math.max(
    nums.reduce((a, b) => a * b, 1),
    nums.reduce((a, b) => a + b, 0)
  );
}

function problem1(pobi, crong) {
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  const DRAW = 0;
  const EXCEPTION = -1;

  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  const pobiMaxNum = Math.max(
    calcMaxNumber(pobiLeftPage),
    calcMaxNumber(pobiRightPage)
  );
  const crongMaxNum = Math.max(
    calcMaxNumber(crongLeftPage),
    calcMaxNumber(crongRightPage)
  );
}

module.exports = problem1;
