function problem1(pobi, crong) {
  var answer;
  const pobiResult = comparePages(separateDigit(pobi));
  const crongResult = comparePages(separateDigit(crong));
  answer = compareResult({ pobiResult, crongResult, pobi, crong });
  return answer;
}

function compareResult({ pobiResult, crongResult, pobi, crong }) {
  if (exceptions(pobi) || exceptions(crong)) return -1;
  if (pobiResult > crongResult) return 1;
  if (pobiResult < crongResult) return 2;
  if (pobiResult === crongResult) return 0;
}

function exceptions(pages) {
  if (Math.abs(pages[0] - pages[1]) !== 1) return 1;
  if (pages.length < 2) return 1;
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

function sumOfPages(pages2D) {
  const LeftPage = pages2D[0].reduce((pre, cur) => pre + cur, 0);
  const RightPage = pages2D[1].reduce((pre, cur) => pre + cur, 0);
  if (LeftPage > RightPage) return LeftPage;
  else return RightPage;
}

function multipleOfPages(pages2D) {
  const LeftPage = pages2D[0].reduce((pre, cur) => pre * cur, 1);
  const RightPage = pages2D[1].reduce((pre, cur) => pre * cur, 1);
  if (LeftPage > RightPage) return LeftPage;
  else return RightPage;
}

function comparePages(pages2D) {
  const maxSum = sumOfPages(pages2D);
  const maxMultiple = multipleOfPages(pages2D);
  if (maxSum > maxMultiple) return maxSum;
  else return maxMultiple;
}

module.exports = problem1;
