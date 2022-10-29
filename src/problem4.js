function problem4(word) {
  var answer = '';
  for (alphabet of word) {
    //1. 알파벳 외의 문자가 들어오는 경우
    if (!/[a-zA-Z]/g.test(alphabet)) {
      answer += alphabet;
      continue;
    }
  }
  return answer;
}

problem4('I love you');

module.exports = problem4;
