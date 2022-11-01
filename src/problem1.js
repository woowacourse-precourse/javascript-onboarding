function problem1(pobi, crong) {
  if (checkValidation(pobi) && checkValidation(crong)) {
    return pageGameApp(pobi, crong);
  }
  return -1;
}

function checkValidation([leftPage, rightPage]) {
  return [leftPage, rightPage].every((page) => 1 <= page && page <= 400) && rightPage - leftPage === 1;
}

function pageGameApp(pobi, crong) {
  const [pobiMaxScore, crongMaxScore] = [pobi, crong].map((bothPages) => maxValueCalculator(bothPages));
  if (pobiMaxScore === crongMaxScore) return 0;
  return pobiMaxScore > crongMaxScore ? 1 : 2;
}

function maxValueCalculator(pages) {
  return Math.max(...splitNumberSum(pages), ...splitNumberMul(pages));
}

function splitNumber(number) {
  return (number + "").split("").map(Number);
}

function splitNumberSum(bothPages) {
  return bothPages.map((page) => splitNumber(page).reduce((totalSum, splitNumber) => (totalSum += splitNumber)));
}

function splitNumberMul(bothPages) {
  return bothPages.map((page) => splitNumber(page).reduce((totalMul, splitNumber) => (totalMul *= splitNumber), 1));
}

module.exports = problem1;
