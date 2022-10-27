function problem1(pobi, crong) {
  var answer;
  const pobi2DArray = comparePages(separateDigit(pobi));
  const crong2DArray = comparePages(separateDigit(crong));
  if (exceptions(pobi) || exceptions(crong)) answer = -1;
  else if (pobi2DArray > crong2DArray) answer = 1;
  else if (pobi2DArray < crong2DArray) answer = 2;
  else if (pobi2DArray === crong2DArray) answer = 0;
  return answer;
}

function exceptions(pages) {
  if (Math.abs(pages[0] - pages[1]) !== 1) return 1;
  if (pages.length < 2) return 1;
}

function separateDigit(pages) {
  const firstPage = String(pages[0])
    .split("")
    .map((i) => Number(i));
  const secondPage = String(pages[1])
    .split("")
    .map((i) => Number(i));
  return [firstPage, secondPage];
}

function sumOfPages(pages2D) {
  const sumOfFirstOne = pages2D[0].reduce((pre, cur) => pre + cur, 0);
  const sumOfSecondOne = pages2D[1].reduce((pre, cur) => pre + cur, 0);
  if (sumOfFirstOne > sumOfSecondOne) return sumOfFirstOne;
  else return sumOfSecondOne;
}

function multipleOfPages(pages2D) {
  const multipleOfFirstOne = pages2D[0].reduce((pre, cur) => pre * cur, 1);
  const multipleOfSecondOne = pages2D[1].reduce((pre, cur) => pre * cur, 1);
  if (multipleOfFirstOne > multipleOfSecondOne) return multipleOfFirstOne;
  else return multipleOfSecondOne;
}

function comparePages(pages2D) {
  const maxOfSum = sumOfPages(pages2D);
  const maxOfMultiple = multipleOfPages(pages2D);
  if (maxOfSum > maxOfMultiple) return maxOfSum;
  else return maxOfMultiple;
}

module.exports = problem1;
