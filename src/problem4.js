function problem4(word) {
  let answer = '';
  const length = word.length;
  for (i=0; i<length; i++) {
    answer += Encoding(word.charCodeAt(i));
  }
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
