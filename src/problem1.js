function problem1(pobi, crong) {
  var answer;
  const pobiResult = maximumPages(separateDigit(pobi));
  const crongResult = maximumPages(separateDigit(crong));
  answer = compareResult({ pobiResult, crongResult, pobi, crong });
  return answer;
}

function separateDigit(pages) {
  const leftPage = String(pages[0])
    .split("")
    .map((i) => Number(i));
  const rightPage = String(pages[1])
    .split("")
    .map((i) => Number(i));
  return [leftPage, rightPage];
}

function maximumPages(pages2D) {
  const maxSum = sumOfPages(pages2D);
  const maxMultiple = multipleOfPages(pages2D);
  return moreLargeValue(maxSum, maxMultiple);
}

function sumOfPages(pages2D) {
  const leftPage = pages2D[0].reduce((pre, cur) => pre + cur, 0);
  const rightPage = pages2D[1].reduce((pre, cur) => pre + cur, 0);
  return moreLargeValue(leftPage, rightPage);
}

function multipleOfPages(pages2D) {
  const leftPage = pages2D[0].reduce((pre, cur) => pre * cur, 1);
  const rightPage = pages2D[1].reduce((pre, cur) => pre * cur, 1);
  return moreLargeValue(leftPage, rightPage);
}

function moreLargeValue(left, right) {
  if (left > right) return left;
  return right;
}

function compareResult({ pobiResult, crongResult, pobi, crong }) {
  if (exceptions(pobi) || exceptions(crong)) return -1;
  if (pobiResult > crongResult) return 1;
  if (pobiResult < crongResult) return 2;
  if (pobiResult === crongResult) return 0;
}

function exceptions(pages) {
  if (Math.abs(pages[0] - pages[1]) !== 1) return true;
  if (pages[0] === 1 && pages[1] === 400) return true;
}

module.exports = problem1;
