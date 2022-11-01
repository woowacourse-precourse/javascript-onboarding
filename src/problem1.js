function problem1(pobi, crong) {
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);
  const scoresToCompare = [pobiScore, crongScore];
  const pobiError = isError(pobi);
  const crongError = isError(crong);
  const result = getResult(scoresToCompare, pobiError, crongError);

  return result;
}

function getScore(person) {
  const leftValues = calculatePageNumber(person[0]);
  const leftScore = compareNumber(leftValues);
  const rightValues = calculatePageNumber(person[1]);
  const rightScore = compareNumber(rightValues);

  return compareNumber({ first: leftScore, second: rightScore });
}

function calculatePageNumber(page) {
  const hundredNumber = Math.floor(page / 100);
  const tenNumber = Math.floor((page / 10) % 10);
  const oneNumber = Math.floor((page % 100) % 10);

  if (hundredNumber === 0) {
    if (tenNumber === 0) {
      return { first: oneNumber, second: oneNumber };
    }
    return { first: tenNumber + oneNumber, second: tenNumber * oneNumber };
  }

  return {
    first: hundredNumber + tenNumber + oneNumber,
    second: hundredNumber * tenNumber * oneNumber,
  };
}

function compareNumber(values) {
  if (values.first >= values.second) {
    return values.first;
  }

  return values.second;
}

function isError(person) {
  const pageError = isPageError(person);
  const numberOfPages = countNumberOfPages(person);
  const leftPage = isLeftPageNumber(person);
  const pageOrdered = orderPageNumber(person);

  if (pageError !== "Not Error") {
    return pageError;
  }

  if (numberOfPages !== "Not Error") {
    return numberOfPages;
  }

  if (leftPage !== "Not Error") {
    return leftPage;
  }

  if (pageOrdered !== "Not Error") {
    return pageOrdered;
  }

  return "Not Error";
}

function isPageError(person) {
  const FIRST_PAGE = 1;
  const LAST_PAGE = 400;

  if (person[0] <= FIRST_PAGE || person[1] >= LAST_PAGE) {
    return "페이지는 1쪽 이상 400쪽 이하 입니다.";
  }

  return "Not Error";
}

function countNumberOfPages(person) {
  if (person.length !== 2) {
    return "페이지 두 쪽을 선택해야 합니다.";
  }

  return "Not Error";
}

function isLeftPageNumber(person) {
  if (person[0] % 2 == 0) {
    return "왼쪽 페이지는 홀수이어야 합니다.";
  }

  return "Not Error";
}

function orderPageNumber(person) {
  if (person[1] !== person[0] + 1) {
    return "오른쪽 페이지는 왼쪽 페이지의 다음 숫자이어야 합니다.";
  }

  return "Not Error";
}

function getResult(score, pobi, crong) {
  const POBI_WiN = 1;
  const CRONG_WIN = 2;
  const TWO_THE_SAME = 0;
  const EXCEPTION = -1;

  if (pobi !== "Not Error" || crong !== "Not Error") {
    return EXCEPTION;
  }

  if (score[0] > score[1]) {
    return POBI_WiN;
  }
  if (score[0] === score[1]) {
    return TWO_THE_SAME;
  }
  if (score[0] < score[1]) {
    return CRONG_WIN;
  }
}

module.exports = problem1;
