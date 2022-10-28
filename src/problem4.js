function problem4(word) {
  const strArr = word.split('');
  let answer = '';
  strArr.forEach(alpa => {
    const code = alpa.charCodeAt(0);
    if (65 <= code && code <= 90) {
      const revChar = String.fromCharCode(155 - code);
      answer += revChar;
    } else if (97 <= code && code <= 122) {
      const revChar = String.fromCharCode(219 - code);
      answer += revChar;
    } else answer += alpa;
  });
  return answer;
}

module.exports = problem4;
