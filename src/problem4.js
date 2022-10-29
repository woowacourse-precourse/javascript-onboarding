function problem4(word) {
  var answer = '';

  const getOppositeCode = (alphabet) => {
    let oppositeCode = 219 - alphabet.charCodeAt();
    if (alphabet === alphabet.toUpperCase()) {
      oppositeCode -= 64;
    }
    return oppositeCode;
  };

  for (alphabet of word) {
    //1. 알파벳 외의 문자가 들어오는 경우
    if (!/[a-zA-Z]/g.test(alphabet)) {
      answer += alphabet;
      continue;
    }
    const oppositeCode = getOppositeCode(alphabet);
    answer += String.fromCharCode(oppositeCode);
  }

  return answer;
}

module.exports = problem4;
