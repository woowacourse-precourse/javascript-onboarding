const problem1Util = require('../src/problem1Util');

function problem1(pobi, crong) {
  var answer;
  const {
    getDigitFromNum,
    calcPageValues,
    compareValue,
    isValidPage,
    GameError,
  } = problem1Util;

  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongiLeftPage, crongRightPage] = crong;
  const startPage = 1;
  const lastPage = 400;

  try {
    // 유효하지 않은 페이지라면 error를 던진다
    if (
      !isValidPage(pobiLeftPage, pobiRightPage, startPage, lastPage) ||
      !isValidPage(crongiLeftPage, crongRightPage, startPage, lastPage)
    ) {
      throw GameError(1);
    }

    const pobiMaxValue = Math.max(
      ...calcPageValues(getDigitFromNum(pobiLeftPage)),
      ...calcPageValues(getDigitFromNum(pobiRightPage))
    );
    const crongMaxValue = Math.max(
      ...calcPageValues(getDigitFromNum(crongiLeftPage)),
      ...calcPageValues(getDigitFromNum(crongRightPage))
    );

    const gameResult = compareValue(pobiMaxValue, crongMaxValue);
    if (gameResult === 0) answer = 0;
    else answer = gameResult > 0 ? 1 : 2;
  } catch (e) {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
