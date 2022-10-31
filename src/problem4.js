function problem4(word) {
  var answer;
  convertedWord = "";
  for (const item of word) {
    const code = item.charCodeAt();
    let convert = 0;
    // 알파벳 변환 규칙은 'm'을 기준으로 하여 해당 수에서 자신을 뺀 수의 2를 곱한 값의 1을 더하는 것
    if (code > 96) {
      convert = code + (109 - code) * 2 + 1;
    } else if (code > 64) {
      convert = code + (77 - code) * 2 + 1;
    } else {
      convert = code;
    }
    convertedWord += String.fromCharCode(convert);
  }
  answer = convertedWord;
  return answer;
}

module.exports = problem4;
