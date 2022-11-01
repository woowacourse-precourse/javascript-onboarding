function problem1(pobi, crong) {
  var answer;
  answer = resultScore(pobi, crong);
  return answer;
}

module.exports = problem1;

function resultScore(pobi, crong) {
  const pobiScore = mainScore(pobi);
  const crongScore = mainScore(crong);
  if (errorResult()) return -1;
  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  if (pobiScore === crongScore) return 0;
}

function mainScore(page) {
  const firstPage = compairPage(page[0]);
  const secondPage = compairPage(page[1]);
  if (firstPage >= secondPage) {
    return firstPage;
  } else {
    return secondPage;
  }
}

//페이지 한 쪽 더하고, 곱한값 중 높은 값 리턴
function compairPage(num) {
  const numArr = String(num).split("").map(Number);
  const plusNumber = numArr.reduce((a, b) => a + b);
  const multipleNumber = numArr.reduce((a, b) => a * b);
  if (plusNumber > multipleNumber) {
    return plusNumber;
  } else {
    return multipleNumber;
  }
}

function errorResult(page1, page2) {
  if (
    page1 % 2 === 0 ||
    400 < page1 < 0 ||
    401 < page2 < 1 ||
    page1 + 1 !== page2
  )
    return false;
}
