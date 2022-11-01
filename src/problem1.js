/**
 * - 에러 발생 체크후 아니라면 pageGame함수를 실행하여 결과값을 리턴한다.
 * @param {number[]} pobi 포비의 [왼쪽페이지,오른쪽페이지]
 * @param {number[]} crong 크롱의 [왼쪽페이지,오른쪽페이지]
 * @returns (1:pobi, 2:crong, 0:draw, -1: error)
 */
function problem1(pobi, crong) {
  let answer;
  if (checkError(pobi) || checkError(crong)) {
    return -1;
  }
  answer = pageGame(pobi, crong);
  return answer;
}

/**
 * - addValue와 multipleValue함수를 실행하여 각 플레이어의 점수 중 가장 큰 경우를 구한 후 값이 더 큰 사람을 승자로 정한다.
 * @param {number[]} pobi 포비의 [왼쪽페이지,오른쪽페이지]
 * @param {number[]} crong 크롱의 [왼쪽페이지,오른쪽페이지]
 * @returns  winner(1:pobi,2:crong,0:draw)
 */
function pageGame(pobi, crong) {
  let winner;
  const [pobiLeft, pobiRight] = pobi.map((x) => String(x).split(""));
  const [crongLeft, crongRight] = crong.map((x) => String(x).split(""));

  const pobiValue = Math.max(
    addValue(pobiLeft),
    addValue(pobiRight),
    multipleValue(pobiLeft),
    multipleValue(pobiRight)
  );

  const crongValue = Math.max(
    addValue(crongLeft),
    addValue(crongRight),
    multipleValue(crongLeft),
    multipleValue(crongRight)
  );

  if (pobiValue > crongValue) {
    winner = 1;
  } else if (pobiValue < crongValue) {
    winner = 2;
  } else {
    winner = 0;
  }
  return winner;
}

/**
 * - 조건에 맞지 않는 값이 들어와 게임이 정상적으로 플레이가 불가능한지 체크
 * @param {Number[]} player 플레이어의 [왼쪽페이지,오른쪽페이지]
 * @returns 에러 발생여부(Boolean)
 */
function checkError(player) {
  if (player[0] < 1 || player[0] > 400 || player[1] < 1 || player[1] > 400) {
    return true;
  }
  if (player[1] - player[0] != 1) {
    return true;
  }
  return false;
}

/**
 * 페이지 번호의 각 자리 숫자의 합을 구하는 함수
 * @param {String[]} x 페이지 번호의 각 자리 ex)['1','2','3']
 * @returns 각 자리 숫자의 합(Number)
 */
function addValue(x) {
  return x.reduce((prev, cur) => Number(prev) + Number(cur));
}
/**
 * 페이지 번호의 각 자리 숫자의 곱을 구하는 함수
 * @param {String[]} x 페이지 번호의 각 자리 ex)['1','2','3']
 * @returns 각 자리 숫자의 곱(Number)
 */
function multipleValue(x) {
  return x.reduce((prev, cur) => Number(prev) * Number(cur));
}

module.exports = problem1;
