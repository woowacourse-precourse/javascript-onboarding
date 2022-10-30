function getMaximum(array) {
  let candidates = [];
  for (let pageNumber of array) {
    const splitNumber = pageNumber.toString().split('');
    candidates.push(splitNumber.reduce((sum, cur) => sum + parseInt(cur), 0));
    candidates.push(splitNumber.reduce((sum, cur) => sum * parseInt(cur), 1));
  }
  return Math.max(...candidates);
}

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

module.exports = problem1;
