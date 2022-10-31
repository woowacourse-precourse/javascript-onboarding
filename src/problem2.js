/** 기능 목록
 * 1. 암호에서 연속하여 중복되는 문자들을 찾는 정규식 생성
 * 2. 정규식을 이용하여 암호에서 중복되는 문자들을 찾아내고,
 *    더 찾아지지 않을 때까지 그 문자들을 제거 후 반환한다.
 */

function problem2(cryptogram) {
  const regex = /(\w)\1+/g;

  let result = cryptogram;
  while (regex.test(result)) {
    result = result.replace(regex, "");
  }

  return result;
}

module.exports = problem2;
