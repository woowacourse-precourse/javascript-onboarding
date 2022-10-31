function exceptionChecker(array) {
  if(!Array.isArray(array)) return false;
  if(array.length !== 2) return false;
  if(array[0]%2 !== 1 || array[1]%2 !== 0) return false;
  if(array[1]-array[0] !== 1) return false;
  if(array[0] < 1 || array[1] > 400) return false;
  array.forEach((index) => {
    if(!Number.isInteger(index)) return false;
  });
  return true;
}

function getScore([leftPage, rightPage]) {
  const leftPageNumber = leftPage.toString().split("");
  const rightPageNumber = rightPage.toString().split("");

  return Math.max(
    leftPageNumber.reduce((prev, current) => prev + Number(current), 0),
    leftPageNumber.reduce((prev, current) => prev * Number(current), 1),
    rightPageNumber.reduce((prev, current) => prev + Number(current), 0),
    rightPageNumber.reduce((prev, current) => prev * Number(current), 1),
    );
}

function compareScore(pobiScore, crongScore) {
  if(pobiScore > crongScore) return 1;
  if(pobiScore < crongScore) return 2;
  return 0;
}

function problem1(pobi, crong) {
  if(!exceptionChecker(pobi) || !exceptionChecker(crong)) return -1;
  const answer = compareScore(getScore(pobi), getScore(crong));

  return answer;
}

module.exports = problem1;
