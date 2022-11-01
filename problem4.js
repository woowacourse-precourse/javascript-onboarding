function problem4(word) {
  var answer;
  answer = word.split("").map((char) => matchAlphabet(char));
  return answer.join("");
}

module.exports = problem4;

function matchAlphabet(char) {
  const code = char.charCodeAt();
  if (97 <= code && code <= 122) {
    return String.fromCharCode(122 - (code - 97));
  }
  if (65 <= code && code <= 90) {
    return String.fromCharCode(90 - (code - 65));
  } else {
    return char;
  }
}
