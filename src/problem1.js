function problem1(pobi, crong) {
  let answer;

  let multiplyDigit = function (number) {
    if (number < 10) {
      return number;
    }
    return (number + '')
      .split('')
      .reduce(
        (accumulatedValue, currentDigit) =>
          accumulatedValue * parseInt(currentDigit),
        1
      );
  };

  let addDigit = function (number) {
    if (number < 10) {
      return number;
    }
    return (number + '')
      .split('')
      .reduce(
        (accumulatedValue, currentDigit) =>
          accumulatedValue + parseInt(currentDigit),
        0
      );
  };

  let getScore = function (pages) {
    const calculatedScores = [];

    for (let page of pages) {
      calculatedScores.push(addDigit(page));
      calculatedScores.push(multiplyDigit(page));
    }
    return Math.max(...calculatedScores);
  };

  let decideWinner = function (player1, player2) {
    const ERROR = -1;
    const WIN_FIRST_PLAYER = 1;
    const WIN_SECOND_PLAYER = 2;
    const DRAW = 0;
    let firstPlayerScore = getScore(player1);
    let secondPlayerScore = getScore(player2);

    if (checkExceptionError(player1) || checkExceptionError(player2)) {
      return (answer = ERROR);
    }

    if (firstPlayerScore === secondPlayerScore) {
      return (answer = DRAW);
    }
    if (firstPlayerScore > secondPlayerScore) {
      return (answer = WIN_FIRST_PLAYER);
    }
    if (firstPlayerScore < secondPlayerScore) {
      return (answer = WIN_SECOND_PLAYER);
    }
  };

  let checkExceptionError = function (pages) {
    const LEFT_PAGE = 0;
    const RIGHT_PAGE = 1;
    const NEXT_PAGE_NUMBER = 1;
    const FIRST_PAGE = 1;
    const LAST_PAGE = 400;
    const IS_ERROR = true;
    let leftPage = pages[LEFT_PAGE];
    let rightPage = pages[RIGHT_PAGE];

    if (leftPage % 2 !== 1 || rightPage % 2 !== 0) {
      return IS_ERROR;
    }
    if (pages.length > 2) {
      return IS_ERROR;
    }
    if (pages[LEFT_PAGE] > pages[RIGHT_PAGE]) {
      return IS_ERROR;
    }
    if (leftPage >= rightPage) {
      return IS_ERROR;
    }
    if (leftPage === FIRST_PAGE || rightPage === LAST_PAGE) {
      return IS_ERROR;
    }
    if (leftPage + NEXT_PAGE_NUMBER !== rightPage) {
      return IS_ERROR;
    }
  };

  decideWinner(pobi, crong);

  return answer;
}

module.exports = problem1;
