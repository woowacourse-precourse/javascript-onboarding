/**
 * 포비와 크롱의 페이지 번호 게임
 * - 책을 임의로 펼쳐 나온 페이지의 각 숫자를 더하거나 곱해 가장 큰 수를 비교
 * @function problem1
 * @param {string[]} pobi 포비가 펼친 페이지
 * @param {string[]} crong 크롱이 펼친 페이지
 * @returns {number} 포비가 이기면 1, 크롱이 이기면 2, 무승부는 0, 예외사항은 -1
 *  */
function problem1(pobi, crong) {
  const gameResult = {
    EXCEPTION: -1,
    WINNER_POBI: 1,
    WINNER_CRONG: 2,
    WINNER_TIE: 0,
  };

  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1])
    return gameResult.EXCEPTION;

  const pobiNum = getMaximum(pobi);
  const crongNum = getMaximum(crong);
  if (pobiNum === crongNum) return gameResult.WINNER_TIE;
  if (pobiNum > crongNum) {
    return gameResult.WINNER_POBI;
  } else {
    return gameResult.WINNER_CRONG;
  }
}

/**
 * @function getMaximum
 * @returns {number} 배열로 받은 수 들을 더한 값과 곱한 값 중 최대값을 리턴
 *  */
function getMaximum(array) {
  let candidates = [];
  for (let pageNumber of array) {
    const splitNumber = pageNumber.toString().split('');
    candidates.push(splitNumber.reduce((sum, cur) => sum + parseInt(cur), 0));
    candidates.push(splitNumber.reduce((sum, cur) => sum * parseInt(cur), 1));
  }
  return Math.max(...candidates);
}

module.exports = problem1;
