function problem4(word) {
  let answer;
  const arr = [];
  for (const s of word) {
    // 문자가 대문자일때의 반대로 변환
    if (s.charCodeAt() >= 65 && s.charCodeAt() <= 90) {
      const code = 90 - s.charCodeAt() + 65;
      arr.push(String.fromCharCode(code));
      // 문자가 소문자일때의 반대로 변환
    } else if (s.charCodeAt() >= 97 && s.charCodeAt() <= 122) {
      const code = 122 - s.charCodeAt() + 97;
      arr.push(String.fromCharCode(code));
      // 그 외에 문자는 그대로 push
    } else {
      arr.push(s);
    }
  }
  // 배열을 string으로 변환
  answer = arr.join("");
  return answer;
}
module.exports = problem4;
