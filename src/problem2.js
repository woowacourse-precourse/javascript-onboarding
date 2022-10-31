/**
 * 암호문을 해독하여 반환합니다.
 * @param {string} cryptogram 해독 할 암호문입니다.
 * @returns {string} 중복 문자가 제거 된 문자열을 반환합니다.
 */
function problem2(cryptogram) {
  let answer = cryptogram;
  const regex = /(.+)\1/;

  while (regex.test(answer)) {
    answer = answer.replace(regex, '');
  }

  return answer;
}

module.exports = problem2;
