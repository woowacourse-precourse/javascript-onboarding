function problem4(word) {
  var answer = '';
  for (alphabet of word) {
    //1. 알파벳 외의 문자가 들어오는 경우
    if (!/[a-zA-Z]/g.test(alphabet)) {
      answer += alphabet;
      continue;
    }
    //2. 소문자가 들어오는 경우
    if (alphabet === alphabet.toLowerCase()) {
      const oppositeCode = 219 - alphabet.charCodeAt();
      answer += String.fromCharCode(oppositeCode);
    } else {
      const oppositeCode = 155 - alphabet.charCodeAt();
      answer += String.fromCharCode(oppositeCode);
    }
  }
  return answer;
}

problem4('I love you');

module.exports = problem4;
