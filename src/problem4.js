function problem4(word) {
  let answer = "";

  for (let i = 0; i < word.length; i++) {
    if (isAlphabet(word[i])) {
      answer += changeAlphabet(word[i]);
      continue;
    }

    answer += word[i];
  }
  return answer;
}

const isAlphabet = (char) => {
  const regex = /^[a-z|A-Z]+$/;
  if (regex.test(char)) return true;
  return false;
};

const changeAlphabet = (char) => {
  const prevAsciiCode = char.charCodeAt(0);

  const UPPER_CASE_LIMIT = 155;
  const LOWER_CASE_LIMIT = 219;

  let nextAsciiCode;

  if (prevAsciiCode <= 90) {
    nextAsciiCode = UPPER_CASE_LIMIT - prevAsciiCode;
    return String.fromCharCode(nextAsciiCode);
  }
  if (prevAsciiCode <= 122) {
    nextAsciiCode = LOWER_CASE_LIMIT - prevAsciiCode;
    return String.fromCharCode(nextAsciiCode);
  }
};

module.exports = problem4;
