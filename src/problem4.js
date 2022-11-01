function problem4(word) {
  let answer = "";
  const upperCase = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    const convertWord = upperCase.charCodeAt(i);
    if (convertWord === 32) {
      answer += " ";
      continue;
    }
    const backCharCode = String.fromCharCode(155 - convertWord);
    answer +=
      word[i] === upperCase[i] ? backCharCode : backCharCode.toLowerCase();
  }
  return answer;
}

module.exports = problem4;
