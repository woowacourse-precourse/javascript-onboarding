function addPageResult(pageNumArr) {
  const result = numArr.map((num) => {
    const str = String(num);

    return str.split('').reduce((acc, str) => {
      return Number(str) + acc;
    }, 0);
  });

  return Math.max(...result);
}

function mulPageResult(pageNumArr) {}

function getScore(pageNumArr) {}

function isExceptionCase(pageNumArr) {
  if (pageNumArr[0] >= pageNumArr[1]) {
    return true;
  }

  if (pageNumArr[0] + 1 !== pageNumArr[1]) {
    return true;
  }

  return false;
}

function problem1(pobi, crong) {
  let answer = -1;

  if (isExceptionCase(pobi) || isExceptionCase(crong)) {
    return answer;
  }

  return answer;
}

module.exports = problem1;
