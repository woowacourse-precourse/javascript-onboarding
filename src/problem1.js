function problem1(pobi, crong) {
  var answer;

  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  const pobiLeftPageArray = splitNumber(pobiLeftPage);
  const pobiRightPageArray = splitNumber(pobiRightPage);
  const crongLeftPageArray = splitNumber(crongLeftPage);
  const crongRightPageArray = splitNumber(crongRightPage);

  const pobiLeftSum = sumOfPage(pobiLeftPageArray);
  const pobiRightSum = sumOfPage(pobiRightPageArray);
  const crongLeftSum = sumOfPage(crongLeftPageArray);
  const crongRightSum = sumOfPage(crongRightPageArray);

  const pobiLeftMultiply = multiplyOfPage(pobiLeftPageArray);
  const pobiRightMultiply = multiplyOfPage(pobiRightPageArray);
  const crongLeftMultiply = multiplyOfPage(crongLeftPageArray);
  const crongRightMultiply = multiplyOfPage(crongRightPageArray);

  return answer;
}

function splitNumber(page) {
  return page.toString().split('');
}

function sumOfPage(arr) {
  return arr.reduce((prev, curr) => Number(prev) + Number(curr));
}

function multiplyOfPage(arr) {
  return arr.reduce((prev, curr) => Number(prev) * Number(curr));
}

module.exports = problem1;
