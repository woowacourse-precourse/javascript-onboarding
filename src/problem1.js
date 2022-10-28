// getMaximum : 배열로 받은 수 들을 더한 값과 곱한 값 중 최대값을 리턴하는 함수
function getMaximum(array) {
  let candidates = [];
  // 더하기값 구하기
  for (let e of array) {
    candidates.push(
      String(e)
        .split('')
        .reduce((sum, cur) => sum + parseInt(cur), 0)
    );
  }
  // 곱하기값 구하기
  for (let e of array) {
    candidates.push(
      String(e)
        .split('')
        .reduce((sum, cur) => sum * parseInt(cur), 1)
    );
  }
  // 더하기/곱하기 값 중 가장 큰 수 리턴
  return Math.max(...candidates);
}

function problem1(pobi, crong) {
  const gameResult = {
    EXCEPTION: -1,
    WINNER_POBI: 1,
    WINNER_CRONG: 2,
    WINNER_TIE: 0,
  };

  // 예외사항 제외
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1])
    return gameResult.EXCEPTION;

  // pobi와 crong의 getMaximum 함수 리턴값 비교
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
