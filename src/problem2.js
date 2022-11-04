/**
 * 주어진 암호문에서 중복된 문자가 사라질 때 까지 제거하는 과정을
 * 반복하여 얻은 평문을 반환한다.
 * @param {string} cryptogram 암호문
 * @returns {string} 해독한 평문
 */
function decrypt(cryptogram) {
  // 각 문자를 필터하기 위해 배열로 변환한다
  let before = cryptogram.split('');
  let after = before;

  do {
    before = after;
    after = before.filter((ch, index) => before[index - 1] !== ch && ch !== before[index + 1]);
  } while (before.length !== after.length);

  return after.join('');
}

/**
 * 문제 2번에서 주어지는 입력인 암호문을 평문으로 해독하여 반환한다.
 * @param {string} cryptogram 암호문
 * @returns {string} 평문
 */
function problem2(cryptogram) {
  return decrypt(cryptogram);
}

module.exports = problem2;
