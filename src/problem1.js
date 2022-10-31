const LAST_PAGE = 400;

function problem1(pobi, crong) {
  var answer;

  if (hasException(pobi) || hasException(crong)) {
    answer = -1;
  } else {
    const pobiScore = getFinalScore(pobi);
    const crongScore = getFinalScore(crong);

    if (pobiScore === crongScore) {
      answer = 0;
    } else {
      answer = pobiScore > crongScore ? 1 : 2;
    }
  }

  return answer;
}

/***** 게임 규칙 *****/

function getFinalScore(pages) {
  const [leftPage, rightPage] = pages;
  /* 왼쪽, 오른쪽 페이지에 대한 각각의 최대 점수 구하기 */
  const leftScore = getScore(leftPage);
  const rightScore = getScore(rightPage);

  /* 왼쪽, 오른쪽 페이지로 만든 점수 중 가장 큰 점수 return */ 
  return leftScore > rightScore ? leftScore : rightScore;
}

/* 하나의 페이지에 대한 최대 점수를 구하는 함수 */
function getScore(page) {
  const numberArr = breakPageNumbers(page);
  const sumScore = getSumScore(numberArr);
  const multipliedScore = getMultipliedScore(numberArr);
  return sumScore > multipliedScore ? sumScore : multipliedScore;
}

/* 하나의 페이지에 대해 각 자리의 숫자 배열을 만들어 주는 함수 */
function breakPageNumbers(page) {
  const numberArr = [];

  while (page > 0) {
    const number = page % 10;
    numberArr.push(number);
    page -= number;
    page = page / 10;
  }

  return numberArr;
}

/* 자릿수를 모두 더한 점수를 구하는 함수 */
function getSumScore(numberArr) {
  let sumScore = 0;
  numberArr.forEach((number) => {
    sumScore += number;
  });
  return sumScore;
}

/* 자릿수를 모두 곱한 점수를 구하는 함수 */
function getMultipliedScore(numberArr) {
  let multipliedScore = 1;
  numberArr.forEach((number) => {
    multipliedScore *= number;
  });
  return multipliedScore;
}


/* 예외 처리 */
function hasException(pages) { 
  return isOutOfRange(pages) || isInvalid(pages) || isNotContinuous(pages);
}

function isOutOfRange(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage < 1 || rightPage > LAST_PAGE) {
    return true;
  }
  return false;
}

function isInvalid(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage % 2 !== 1 || rightPage % 2 === 1 || leftPage >= rightPage) {
    return true;
  }
  return false;
}

function isNotContinuous(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage + 1 !== rightPage) {
    return true;
  }
  return false;
}

module.exports = problem1;
