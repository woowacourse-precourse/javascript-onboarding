// 페이지 번호가 연속적인지 확인하는 기능
function isPageContinuous(pages) {
  if (pages[1] - pages[0] === 1) {
    return true;
  }
  return false;
}

// 페이지 번호를 각 자리 숫자로 분리하는 기능
function splitPageNumber(pages) {
  const splitedNumbers = pages.map((number) =>
    number
      .toString()
      .split("")
      .map((number) => +number)
  );
  return splitedNumbers;
}

function problem1(pobi, crong) {
  var answer;
  if (!isPageContinuous(pobi) || !isPageContinuous(crong)) {
    return -1;
  }
  const splitedPobi = splitPageNumber(pobi);
  const splitedCrong = splitPageNumber(crong);
  console.log(splitedPobi, splitedCrong);
  return answer;
}

problem1([97, 98], [101, 102]);

module.exports = problem1;
