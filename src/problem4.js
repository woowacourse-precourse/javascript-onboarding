function problem4(word) {
  let answer = "";

  // 일반 사전 및 청개구리 사전 선언(대, 소문자)
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const upperReversed = upperAlphabet.split("").reverse();
  const lowerAlphabet = upperAlphabet.toLowerCase();
  const lowerReversed = lowerAlphabet.split("").reverse();

  // 알파벳 변환 for 문 작성"
  for (let i = 0; i < word.length; i++) {
    if (upperAlphabet.includes(word[i])) {
      answer += upperReversed[upperAlphabet.indexOf(word[i])];
    } else if (lowerAlphabet.includes(word[i])) {
      answer += lowerReversed[lowerAlphabet.indexOf(word[i])];
    } else {
      answer += " ";
    }
  }

  // 결과값 산출
  return answer;
}

module.exports = problem4;
