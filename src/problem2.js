/**
 * 중복문자 암호문 해독
 * - 3, 6, 9가 들어가는 개수만큼 손뼉을 쳐야 한다
 * @function problem2
 * @param {string} cryptogram 임의의 문자열
 * @returns {string} 연속하는 중복 문자들을 삭제한 결과
 *  */
function problem2(cryptogram) {
  let pattern = /([a-z])\1+/g;
  let decode = cryptogram;
  while (pattern.test(decode)) {
    decode = decode.replace(pattern, '');
  }
  return decode;
}

module.exports = problem2;
