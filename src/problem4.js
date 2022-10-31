function problem4(word) {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    let code = word[i].charCodeAt();
    code >= 97 && code <= 122
      ? (answer += String.fromCharCode(122 - (code - 97)))
      : code >= 65 && code <= 90
      ? (answer += String.fromCharCode(90 - (code - 65)))
      : (answer += word[i]);
  }
  return answer;
}

module.exports = problem4;
