/*
 * -- 기능 목록 --
 * 1. n번째 횟수에 쳐야하는 박수의 횟수를 반환하는 함수 - getClapTime(n)
 * 1-1. 문자 3, 6, 9에 매칭되는 정규식 - clapRegExp
 */

function getClapTime(n) {
  let clapTime = 0;
  const clapRegExp = /3|6|9/g;

  // 매칭된 목록인 배열을 받아, 길이를 반환
  const matchList = String(n).match(clapRegExp);

  if (matchList) {
    clapTime += matchList.length;
  }

  return clapTime;
}

function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += getClapTime(i);
  }

  return answer;
}

module.exports = problem3;
