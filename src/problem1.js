const GAME_RESULT = {
  DRAW: 0,
  POBI_WIN: 1,
  CRONG_WIN: 2,
};

function problem1(pobi, crong) {
  const [pobisLeftPage, pobisRightPage] = pobi;
  const [crongsLeftPage, crongsRightPage] = crong;

  if (
      isException(pobisLeftPage, pobisRightPage) ||
      isException(crongsLeftPage, crongsRightPage)
  ) {
    return -1;
  }

  const pobiScore = calcScore(pobisLeftPage, pobisRightPage);
  const crongScore = calcScore(crongsLeftPage, crongsRightPage);

  return getWinnerResult(pobiScore, crongScore);
}

function isException(leftPage, rightPage) {
  return (
      isNotPageDifference1(leftPage, rightPage) ||
      isNotPageRange(leftPage) ||
      isNotPageRange(rightPage) ||
      isInvalidPage(leftPage, rightPage)
  );
}

function isNotPageDifference1(leftPage, rightPage) {
  return rightPage - leftPage !== 1;
}

function isNotPageRange(page) {
  return page < 1 || page > 400;
}

function isInvalidPage(leftPage, rightPage) {
  return leftPage % 2 === 0 || rightPage % 2 === 1;
}

function calcScore(leftPage, rightPage) {
  const l = leftPage + '';
  const r = rightPage + '';

  return Math.max(
      [...l].map(num => +num).reduce((a, b) => a + b),
      [...l].map(num => +num).reduce((a, b) => a * b),
      [...r].map(num => +num).reduce((a, b) => a + b),
      [...r].map(num => +num).reduce((a, b) => a * b),
  );
}

function getWinnerResult(player1Score, player2Score) {
  if (player1Score > player2Score) {
    return GAME_RESULT.POBI_WIN;
  } else if (player1Score < player2Score) {
    return GAME_RESULT.CRONG_WIN;
  }

  return GAME_RESULT.DRAW;
}

module.exports = problem1;
