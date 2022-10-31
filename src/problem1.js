function problem1(pobi, crong) {
  if (validationArr(pobi) && validationArr(crong)) {
    return pageGameApp([pobi, crong]);
  }
  return -1;
}

function validationArr([leftPage, rightPage]) {
  return [leftPage, rightPage].every((page) => 1 <= page && page <= 400) && rightPage - leftPage == 1 ? true : false;
}

function pageGameApp(PageListArr) {
  const [pobiMaxScore, crongMaxScore] = PageListArr.map((pageArr) => maxValueCalculator(pageArr));
  if (pobiMaxScore == crongMaxScore) return 0;
  return pobiMaxScore > crongMaxScore ? 1 : 2;
}

function maxValueCalculator(pageArr) {
  return Math.max(...sumArr(pageArr), ...mulArr(pageArr));
}

function splitNumber(number) {
  return (number+"").split("").map(Number);
}

function sumArr(pageArr) {
  return pageArr.map((page)=> splitNumber(page).reduce((totalSum, number) => totalSum += number));
}

function mulArr(pageArr) {
  return pageArr.map((page)=> splitNumber(page).reduce((totalMul, number) => totalMul *= number,1));
}

module.exports = problem1;
