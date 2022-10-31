function problem4(word) {
  const CHAR_CODE_A = 65;
  const CHAR_CODE_Z = 90;
  const CHAR_CODE_a = 97;
  const CHAR_CODE_z = 122;
  const answer = [...word].map((v) => {
    if (v.charCodeAt() >= CHAR_CODE_A && v.charCodeAt() <= CHAR_CODE_Z) {
      charCode = CHAR_CODE_A + CHAR_CODE_Z - v.charCodeAt();
      return String.fromCharCode(charCode);
    }
    if (v.charCodeAt() >= CHAR_CODE_a && v.charCodeAt() <= CHAR_CODE_z) {
      charCode = CHAR_CODE_a + CHAR_CODE_z - v.charCodeAt();
      return String.fromCharCode(charCode);
    }
    return v;
  });
  return answer.join('');
}

module.exports = problem4;
