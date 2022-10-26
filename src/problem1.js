/**
 * 한쪽 페이지의 숫자를 배열 형태로 변환하는 함수
 * @param {number} eachSideNum 한쪽 면의 페이지 숫자
 * @returns 숫자를 각 자릿수로 쪼깬 배열. 각 원소는 number 타입.
 */
function makeSplitedArr(eachSideNum) {
  let eachSide = eachSideNum;

  eachSide = eachSide
    .toString()
    .split("")
    .map((item) => Number(item));

  return eachSide;
}

/**
 * 예외 상황을 판별하는 함수
 * @param {array} who 펼친 페이지 번호가 들어있는 배열
 * @returns 예외상황이 맞다면 true, 아니라면 false 반환
 */
function exceptionCheck(who) {
  // 페이지가 연속적이지 않은 경우는 예외상황이다.
  // 왼쪽이 오른쪽보다 작으므로 오른쪽 - 왼쪽 === 1 이어야 올바른 페이지이다.
  if (who[1] - who[0] !== 1) {
    return true;
  }

  // 누가 책을 펴든 상관없이 시작 면이나 마지막 면이 나오면 안된다
  // 시작이랑 마지막 면이 어디지??? 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수라는 걸 보니..
  // [1,2], [399,400]이 시작과 끝 면인 것 같다
  // 위에서 연속적이지 않은 페이지가 나오는 경우는 예외 처리를 했으므로
  // 이번에는 페이지 그 자체에 대해서만 생각하면 될 것 같다
  if ((who[0] === 1 && who[1] === 2) || (who[0] === 399 && who[1] === 400)) {
    return true;
  }

  return false;
}

function problem1(pobi, crong) {
  // 한 명의 입력이라도 예외 상황이라면 -1 반환
  if (exceptionCheck(pobi) || exceptionCheck(crong)) {
    return -1;
  }

  return ans;
}

module.exports = problem1;
