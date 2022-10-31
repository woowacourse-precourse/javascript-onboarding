function problem4(word) {
  var answer = word
    .split("")
    .reduce((prev, cur) => prev + changeAlphabet(cur), "");
  return answer;
}

/**
 * 알파벳 소문자와 대문자만 뒤집어서 리턴한다
 * @param {string} alphabet - 알파벳 또는 다른 문자 하나
 * @returns {string} 규칙에 맞게 뒤집거나 그대로인 문자
 */
const changeAlphabet = (alphabet) => {
  const asciiCode = alphabet.charCodeAt(0);
  if (asciiCode >= 97 && asciiCode <= 122)
    // 소문자 (97 ~ 122)
    return String.fromCharCode(219 - asciiCode);
  else if (asciiCode >= 65 && asciiCode <= 90)
    // 대문자 (65 ~ 90)
    return String.fromCharCode(155 - asciiCode);
  else return alphabet;
};

module.exports = problem4;
