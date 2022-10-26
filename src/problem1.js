function addPageResult(pageNumArr) {
  const result = pageNumArr.map((num) => {
    const str = String(num);

    return str.split('').reduce((acc, str) => {
      return Number(str) + acc;
    }, 0);
  });

  return Math.max(...result);
}

function mulPageResult(pageNumArr) {
  const result = pageNumArr.map((num) => {
    const str = String(num);

    return str.split('').reduce((acc, str) => {
      return Number(str) * acc;
    }, 1);
  });

  return Math.max(...result);
}

function getScore(pageNumArr) {
  return Math.max(addPageResult(pageNumArr), mulPageResult(pageNumArr));
}

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

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  if (pobiScore > crongScore) {
    answer = 1;
  } else if (crongScore > pobiScore) {
    answer = 2;
  } else {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
