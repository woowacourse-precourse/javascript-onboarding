function problem4(word) {
  let answer = '';
  const upperRegex = /^[A-Z]+$/;
  const lowerRegex = /^[a-z]+$/;
  for (let i = 0; i < word.length; i++) {
    if (upperRegex.test(word[i]) == true) {
      answer += String.fromCodePoint(155 - word.charCodeAt(i));
      continue;
    }
    if (lowerRegex.test(word[i]) == true) {
      answer += String.fromCodePoint(219 - word.charCodeAt(i));
      continue;
    }
    answer += word[i];
  }
  return answer;
}

module.exports = problem4;
