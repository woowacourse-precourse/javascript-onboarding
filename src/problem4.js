const ASCII_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ASCII_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

/**
 * A -> Z, B -> Y 처럼 거꾸로 매핑되는 청개구리 사전
 * @type {Object.<string, string>}
 */
const TRANSLATE_TABLE = Object.freeze(
  Object.fromEntries(
    // 각 코드(uppercase, lowercase)에 대해 거꾸로 mapping되는
    // 코드 테이블 생성
    [ASCII_UPPERCASE, ASCII_LOWERCASE]
      .map(code => code
        .split('')
        .map((ch, index) => [ch, code[code.length - index - 1]]
        ))
      .flat()
  )
);

/**
 * A -> Z, B -> Y 와 같이 거꾸로 매핑된 청개구리 텍스트로 번역합니다.
 * @param {string} word 청개구리 사전에 따라 번역할 텍스트
 * @returns {string} 청개구리 사전에 따라 번역된 텍스트
 */
function translate(word) {
  return word.split('').map(ch => TRANSLATE_TABLE[ch] ?? ch).join('');
}

/**
 * 문제 4의 입력인, 텍스트가 주어지면 청개구리 사전 규칙에 따라
 * 번역하여 반환합니다.
 * @param {string} word 청개구리 사전에 따라 번역할 텍스트
 * @returns {string} 청개구리 사전에 따라 번역된 텍스트
 */
function problem4(word) {
  return translate(word);
}

module.exports = problem4;
