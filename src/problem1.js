function problem1(pobi, crong) {
  var answer = judWinner(pobi, crong);
  return answer;
}

function errorTestPass(leftPage, rightPage) {
  return (
    rangeTest(leftPage) && rangeTest(rightPage) && pageTest(leftPage, rightPage)
  );
}

function rangeTest(page) {
  return page > 1 && page < 400;
}

function pageTest(leftPage, rightPage) {
  return rightPage - 1 === leftPage;
}

function addPageNum(pageNum) {
  const dividePageNums = [...pageNum.toString()];
  return dividePageNums.reduce((accumulator, currentValue) => {
    return parseInt(accumulator) + parseInt(currentValue);
  });
}

function multiplyPageNum(pageNum) {
  const dividePageNums = [...pageNum.toString()];
  if (dividePageNums.includes("0")) return 0;
  return dividePageNums.reduce((preValue, currentValue) => {
    return parseInt(preValue) * parseInt(currentValue);
  });
}

function judBigTotalNum(addPageNum, multiplyPageNum) {
  return addPageNum > multiplyPageNum ? addPageNum : multiplyPageNum;
}

function judBigPageNum(leftPageNumsSum, rightPageNumsSum) {
  return leftPageNumsSum > rightPageNumsSum
    ? leftPageNumsSum
    : rightPageNumsSum;
}

function CalculateBiggestPageNum(pages) {
  const result = [];
  pages.forEach((page) => {
    const pageAdd = addPageNum(page);
    const pageMultiply = multiplyPageNum(page);
    result.push(judBigTotalNum(pageAdd, pageMultiply));
  });
  return result;
}

/***
 *
 * @param pobi {Array}
 * @param crong {Array}
 */
function judWinner(pobi, crong) {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;
  if (
    !(errorTestPass(pobiLeftPage, pobiRightPage) &&
    errorTestPass(crongLeftPage, crongRightPage))
  )
    return -1;

  const pobiResult = CalculateBiggestPageNum(pobi);
  const crongResult = CalculateBiggestPageNum(crong);
  const pobiBiggestNum = judBigPageNum(pobiResult[0], pobiResult[1]);
  const crongBiggestNum = judBigPageNum(crongResult[0], crongResult[1]);

  if (pobiBiggestNum > crongBiggestNum) return 1;
  else if (pobiBiggestNum < crongBiggestNum) return 2;
  else return 0;
}

module.exports = problem1;
