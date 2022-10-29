function problem2(cryptogram) {
  let splitCrpyto = cryptogram.split("");
}

module.exports = problem2;

/**
 * 1. 반복되는 로직이 필요로 하다.(혹은 재귀적)
 * 2. 문자열에서 중복되는 지를 판별하는 함수가 필요로 하다.
 * 3. 문자열을 제거하는 함수가 필요로 하다.
 */

/**
 * @param {array} str
 * @returns
 */
function getRepeated(str) {
  const results = [];

  for (let i = 0; i < str.length; i++) {
    return results;
  }
}

/**
 * @param {array} slice 중복된 문자의 시작과 끝 정보를 가진 배열
 * @param {array} str 원래 문자열
 */
function changeCharacter(slice, str) {
  const [start, end] = slice;

  for (let i = start; i <= end; i++) {
    str[i] = null;
  }
}
