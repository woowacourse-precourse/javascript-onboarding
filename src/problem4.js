function isUpperCase(char) {
  const UPPER_CODE_A = "A".charCodeAt(0);
  const UPPER_CODE_Z = "Z".charCodeAt(0);

  return UPPER_CODE_A <= char && char <= UPPER_CODE_Z;
}

function isLowerCase(char) {
  const LOWER_CODE_A = "a".charCodeAt(0);
  const LOWER_CODE_Z = "z".charCodeAt(0);

  return LOWER_CODE_A <= char && char <= LOWER_CODE_Z;
}
function problem4(word) {
  var answer = "";
  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    if (isUpperCase(charCode)) {
      const offset = charCode - 65;
      const encryptWord = 90 - offset;
      answer += String.fromCharCode(encryptWord);
    } else if (isLowerCase(charCode)) {
      const offset = charCode - 97;
      const encryptWord = 122 - offset;
      answer += String.fromCharCode(encryptWord);
    } else {
      answer += word[i];
    }
  }
  return answer;
}

module.exports = problem4;
