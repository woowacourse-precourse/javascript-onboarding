function problem4(word) {
  let answer = '';
  return answer;
}

function Encoding(ascii) {
  if (ascii >= 65 && ascii <= 90) {
    return String.fromCharCode(90-(ascii-65));
  }
  if (ascii >= 97 && ascii <= 122) {
    return String.fromCharCode(122-(ascii-97));
  }
}
module.exports = problem4;
