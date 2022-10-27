function problem1(pobi, crong) {
  var answer;
  const pobi2DArray = separateDigit(pobi);
  const crong2DArray = separateDigit(crong);
  return answer;
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

module.exports = problem1;
