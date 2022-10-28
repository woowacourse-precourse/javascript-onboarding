function isAlphabet(char) {
  return char.match(/[a-zA-z]/) ? true : false;
}
function isWordValid(word) {
  return word < 1 || word > 1000 ? true : false;
}

function problem4(word) {
  let answer = "";
  if (isWordValid(word)) return -1;
  [...word].forEach((char) => {
    if (isAlphabet(char)) null;
    else answer += char;
  });
  return answer;
}

module.exports = problem4;
