function problem4(word) {
  let answer = [];
  // 모든 글자에 대해
  for (let i = 0; i < word.length; i++) {
    const ascii = word.charCodeAt(i); // 아스키 코드로 변환 후
    // 소문자는 대문자로
    if (ascii >= 65 && ascii <= 90) {
      answer.push(90 - ascii + 65)
    }
    // 대문자는 소문자로
    if (ascii >= 97 && ascii <= 122) {
      answer.push(122 - ascii + 97)
    }
    // 띄어쓰기는 그대로
    if (ascii === 32) {
      answer.push(32)
    }
  }
  // 모든 아스키 코드를 문자로 변환 후 합치기
  return answer.map((num) => String.fromCharCode(num)).join('');
}

module.exports = problem4;
