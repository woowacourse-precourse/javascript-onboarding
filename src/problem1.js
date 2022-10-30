// [✅] 자릿 수 만큼 더하게 하기 곱하게 하기
// 자릿 수 만큼 더하기 / result += num;
// 자릿 수 만큼 곱하기 / 0에 곱하면 0이되니, 첫 값은 result에 넣고 시작, result *= num;

// [✅] 각 숫자의 자릿수를 모두 더하기, 곱하기를 하여 가장 큰 수를 뱉는다.
// result에 4개의 값을 넣고 가장 큰 값을 user의 점수로 등록

// [✅] 포비가 이길 경우 1, 크롱이 이길 경우 2, 무승부 0, 예외사항은 -1로 return 한다.
// if(pobi === crong) return 0;
// if(pobi > crong) return 1;
// if(pobi < crong) return 2;
// 그 외 return -1;

// [✅] return -1 처리의 경우 - 1 / 숫자가 홀-짝 순서가 되지 않을 경우
// [✅] return -1 처리의 경우 - 2 / 시작 면(1-2) or 마지막 면(399-400)이 나온 경우
// [✅] return -1 처리의 경우 - 3 / 각 유저의 페이지 숫자들이 동일한 번호인 경우
// [✅] return -1 처리의 경우 - 4 / 각 유저의 페이지 숫자들의 차이가 2이상인 경우

// 더 큰 값 비교
function islarger(a, b) {
  return a > b;
}
// 동일 값 비교
function isEqual(a, b) {
  return a === b;
}
// 왼 or 오, 어느 쪽 페이지인가
function getPageSide(side) {
  if (isEqual(side, 'left')) {
    return (side = 0);
  }
  if (isEqual(side, 'right')) {
    return (side = 1);
  }
}
// 페이지 자릿수 만큼 더하기
function addDigits(openPage, side) {
  let result = 0;
  const pageSide = getPageSide(side);
  const pageNums = openPage[pageSide].toString().split('');
  pageNums.map((num) => {
    result += Number(num);
  });
  return result;
}
// 페이지 자릿수 만큼 곱하기
function multiplyDigits(openPage, side) {
  let result = 0;
  const pageSide = getPageSide(side);
  const pageNums = openPage[pageSide].toString().split('');
  pageNums.map((num, index) => {
    if (index === 0) {
      return (result += Number(num));
    }
    result *= Number(num);
  });
  return result;
}
// 더하기 or 곱하기 결과 중 최댓값 뽑기
function getMaximumValue(user) {
  const result = [];
  result.push(
    addDigits(user, 'left'),
    addDigits(user, 'right'),
    multiplyDigits(user, 'left'),
    multiplyDigits(user, 'right')
  );
  return result.sort().reverse()[0];
}
// 최종 결과 반환하기
function result(userName1, userName2) {
  const user1 = getMaximumValue(userName1);
  const user2 = getMaximumValue(userName2);
  if (isEqual(user1, user2)) {
    return 0;
  }
  if (islarger(user1, user2)) {
    return 1;
  }
  if (islarger(user2, user1)) {
    return 2;
  }
}
// 예외 처리 (-1)
function exceptionHandling(userName1, userName2) {
  if (isFirstNumberEven(userName1)) {
    return -1;
  }
  if (isFirstNumberEven(userName2)) {
    return -1;
  }
  if (isBothEnds(userName1)) {
    return -1;
  }
  if (isBothEnds(userName2)) {
    return -1;
  }
  if (isSameNumber(userName1)) {
    return -1;
  }
  if (isSameNumber(userName2)) {
    return -1;
  }
  if (isIncreaseRegular(userName1)) {
    return -1;
  }
  if (isIncreaseRegular(userName2)) {
    return -1;
  }
}
// 각 유저의 첫번째 수가 짝수인 경우
function isFirstNumberEven(user) {
  if (isEqual(user[0] % 2, 0)) {
    return true;
  }
}
// 각 유저의 숫자 중, 1페이지, 400페이지가 포함되어있는 경우
function isBothEnds(user) {
  const left = getPageSide('left');
  const right = getPageSide('right');
  if (
    user[left] === 1 ||
    user[left] === 400 ||
    user[right] === 1 ||
    user[right] === 400
  ) {
    return true;
  }
}
// 각 유저의 숫자가 동일한 번호인가?
function isSameNumber(user) {
  if (isEqual(user[getPageSide('left')], user[getPageSide('right')])) {
    return true;
  }
}
// 각 유저의 페이지 숫자들의 차이가 2이상인 경우
function isIncreaseRegular(user) {
  const differenceNums = Math.abs(
    user[getPageSide('right')] - user[getPageSide('left')]
  );
  if (differenceNums > 1) {
    return true;
  }
}
// 정답
function problem1(pobi, crong) {
  if (exceptionHandling(pobi, crong) === -1) {
    return -1;
  }
  return result(pobi, crong);
}

console.log(problem1([131, 132], [211, 212]));

module.exports = problem1;
