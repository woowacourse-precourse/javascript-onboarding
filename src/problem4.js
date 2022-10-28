function problem4(word) {
  var answer = word
    .split("")
    .reduce((prev, cur) => prev + changeAlphabet(cur), "");
  return answer;
}

const changeAlphabet = (alphabet) => {
  const asciiCode = alphabet.charCodeAt(0);

  if (asciiCode >= 97 && asciiCode <= 122) {
    // 소문자 (97 ~ 122)
    return String.fromCharCode(219 - asciiCode);
  } else if (asciiCode >= 65 && asciiCode <= 90) {
    // 대문자 (65 ~ 90)
    return String.fromCharCode(155 - asciiCode);
  } else {
    return alphabet;
  }
};

module.exports = problem4;
