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

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
