const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
function isUpperCase(char) {
  return UPPER_CASE.includes(char) ? true : false;
}
function isAlphabet(char) {
  return char.match(/[a-zA-z]/) ? true : false;
}
function isWordValid(word) {
  return word < 1 || word > 1000 ? true : false;
}
function translation(char) {
  if (isUpperCase(char)) {
    const index = UPPER_CASE.split("").findIndex(
      (upperChar) => upperChar === char
    );
    return UPPER_CASE[25 - index];
  } else {
    const index = LOWER_CASE.split("").findIndex((lowChar) => lowChar === char);
    return LOWER_CASE[25 - index];
  }
}
function problem4(word) {
  let answer = "";
  if (isWordValid(word)) return -1;
  [...word].forEach((char) => {
    if (isAlphabet(char)) answer += translation(char);
    else answer += char;
  });
  return answer;
}

module.exports = problem4;
