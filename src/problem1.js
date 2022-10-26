const splitNumber = (num) => {
  num = num + "";
  return num.split("").map((item) => Number(item));
};

const getScore = (leftNums, rightNums) => {
  const leftSum = leftNums.reduce((acc, cur) => acc + cur, 0);
  const leftMultiply = leftNums.reduce((acc, cur) => acc * cur, 1);
  const rightSum = rightNums.reduce((acc, cur) => acc + cur, 0);
  const rightMultiply = rightNums.reduce((acc, cur) => acc * cur, 1);
  return Math.max(leftSum, leftMultiply, rightSum, rightMultiply);
};

function problem1(pobi, crong) {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  if (
    pobiRightPage - pobiLeftPage !== 1 ||
    crongRightPage - crongLeftPage !== 1
  )
    return -1;

  const pobiScore = getScore(
    splitNumber(pobiLeftPage),
    splitNumber(pobiRightPage)
  );
  const crongScore = getScore(
    splitNumber(crongLeftPage),
    splitNumber(crongRightPage)
  );

  if (pobiScore > crongScore) return 1;
  if (pobiScore > crongScore) return 2;
  return 0;
}

module.exports = problem1;
