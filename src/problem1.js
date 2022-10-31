function problem1(pobi, crong) {
  //포비 크롱 중 예외사항 발생할 경우 -1 리턴
  if (isExceptCase(pobi) || isExceptCase(crong)) return -1;

  //최대값 확인
  const pobiMax = Math.max(splitAndSum(pobi), splitAndMultiply(pobi));
  const crongMax = Math.max(splitAndSum(crong), splitAndMultiply(crong));

  //포비와 크롱의 최대값을 비교한 뒤 리턴
  if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else return 0;
}

/**
 * 첵페이지 배열이 예외상황인지 아닌지 체크하는 함수,
 *
 * @param {[number,number]} bookarr 책의 [앞페이지, 뒷페이지] 정보를 파라미터로 받음
 * @return {boolean}
 */
function isExceptCase(bookarr) {
  // array에 제대로 된 값이 아닐 경우 false 리턴
  if (!bookarr.length || bookarr.length !== 2) return true;

  const [a, b] = bookarr.map(Number);
  //앞페이지가 짝수거나 뒷페이지가 홀수일때
  if (a % 2 === 0 || b % 2 === 1) return true;
  //앞페이지, 뒷페이지 모두 0보다 작을때
  if (a < 0 || b < 0) return true;
  //뒷페이지값이 앞페이지값보다 작거나 클 때
  if (b <= a) return true;
  //시작면 또는 마지막 면을 펼쳤을 때
  if (a === 0 || b === 400) return true;
  //뒷페이지-앞페이지가 1이 아닐때.
  if (b - a !== 1) return true;
  // 입력값이 잘못되었을때
  // 모두 통과하면 예외사항 아니므로 false 반환\
  return false;
}

/**
 * 숫자를 받아서 자리수를 기준으로 나눠서 배열로 만들어주는 함수.
 * ex) 100 => [1,0,0] 1234 => [1,2,3,4]
 *
 * @param {number} num
 * @returns {number[]}
 */
function splitToNumArray(num) {
  const strFromInt = num.toString();
  return strFromInt.split("").map(Number);
}

/**
 * 앞페이지와 뒷 페이지의 각 자리의 숫자값을 더했을 때 더 큰 값을 리턴하는 함수.
 *
 * @param {[number,number]} bookArr
 * @returns {number} max
 */
function splitAndSum(bookArr) {
  const [a, b] = bookArr;
  let sumA = splitToNumArray(a).reduce((prev, cur) => (prev += cur));
  let sumB = splitToNumArray(b).reduce((prev, cur) => (prev += cur));

  return Math.max(sumA, sumB);
}

/**
 * 앞페이지와 뒷 페이지의 각 자리의 숫자값을 곱했을 때 더 큰 값을 리턴하는 함수.
 *
 * @param {[number,number]} bookArr
 * @returns {number} max
 */
function splitAndMultiply(bookArr) {
  const [a, b] = bookArr;
  let mulA = splitToNumArray(a).reduce((prev, cur) => (prev *= cur));
  let mulB = splitToNumArray(b).reduce((prev, cur) => (prev *= cur));
  return Math.max(mulA, mulB);
}

module.exports = problem1;
