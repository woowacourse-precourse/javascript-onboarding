function problem1(pobi, crong) {
  let answer;

  const Result = {
    POBI: 1,
    CRONG: 2,
    TIE: 0,
    EXCEPTION: -1,
  };

  Object.freeze(Result);

  if (isException(pobi) || isException(crong)) {
    answer = Result.EXCEPTION;
  } else {
    const maxPobiScore = getMaxScore(pobi);
    const maxCrongScore = getMaxScore(crong);

    if (maxPobiScore > maxCrongScore) {
      answer = Result.POBI;
    } else if (maxPobiScore < maxCrongScore) {
      answer = Result.CRONG;
    } else {
      answer = Result.TIE;
    }
  }

  return answer;
}

function isException(pages) {
  const [left, right] = pages;

  const Page = {
    MIN: 1,
    MAX: 400,
  };
  Object.freeze(Page);

  const exceptionTestCase = [
    pages.length == 2,
    Page.MIN <= left <= Page.MAX,
    Page.MIN <= right <= Page.MAX,
    left % 2 === 1,
    right % 2 === 0,
    right - left === 1,
  ];

  if (exceptionTestCase.includes(false)) {
    return true;
  } else {
    return false;
  }
}

function getMaxScore(pages) {
  let maxScore;
  let scores = [];

  for (let page of pages) {
    scores.push(getAddDigits(page));
    scores.push(getMultiplyDigits(page));
  }

  maxScore = Math.max(...scores);

  return maxScore;
}

function getAddDigits(number) {
  let sum = 0;

  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

function getMultiplyDigits(number) {
  let multiply = 1;

  while (number > 0) {
    multiply *= number % 10;
    number = Math.floor(number / 10);
  }

  return multiply;
}

module.exports = problem1;
