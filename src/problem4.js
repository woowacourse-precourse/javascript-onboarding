function problem4(word) {
  let answer = "";
  const upperCaseWord = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    const strASCII = upperCaseWord.charCodeAt(i);
    if (strASCII === 32) {
      answer += " ";
      continue;
    }
    const fromCharCodeStr = String.fromCharCode(155 - strASCII);
    answer +=
      word[i] === upperCaseWord[i]
        ? fromCharCodeStr
        : fromCharCodeStr.toLowerCase();
  }

  return answer;
}

module.exports = problem4;
