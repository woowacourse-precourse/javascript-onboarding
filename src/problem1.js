//#sumPage: 펼친 페이지의 합을 구하는 함수
function sumPage(page) {
  let result = 0;
  do {
    result += page % 10;
    page = Math.floor(page / 10);
  } while (page > 0);
  return result;
}

//#multiplyPage: 펼친 페이지의 곱을 구하는 함수
function multiplyPage(page) {
  let result = 1;
  do {
    result *= page % 10;
    page = Math.floor(page / 10);
  } while (page > 0);
  return result;
}

//#findMaxCal: 구한 연산값 중 최대값을 반환하는 함수
function findMaxCal(page) {
  const sumResult = sumPage(page);
  const multiplyResult = multiplyPage(page);
  return Math.max(sumResult, multiplyResult);
}

//#isSide: 시작면이나 마지막 면인지 확인하는 함수
function isSide(page) {
  if (page[0] === 1 || page[1] === 400) {
    return false;
  }
  return true;
}

//#isContinue: 들어온 값이 이어지는 페이지가 맞는지 확인하는 함수
function isContinue(page) {
  if (page[1] - page[0] !== 1) {
    return false;
  }
  return true;
}

function problem1(pobi, crong) {
  let answer;
  if (!isSide(pobi) || !isSide(crong)) return -1;
  if (!isContinue(pobi) || !isContinue(crong)) return -1;
  //예외사항의 경우 -1을 리턴
  const pobiPageResult = Math.max(findMaxCal(pobi[0]), findMaxCal(pobi[1]));
  //pobi의 점수를 저장
  const crongPageResult = Math.max(findMaxCal(crong[0]), findMaxCal(crong[1]));
  //crong의 점수를 저장
  if (pobiPageResult > crongPageResult) answer = 1;
  //pobi가 이긴 결과값 저장
  else if (pobiPageResult < crongPageResult) answer = 2;
  //crong가 이긴 결과값 저장
  else answer = 0;
  //비긴 결과값 저장
  return answer;
}

module.exports = problem1;
