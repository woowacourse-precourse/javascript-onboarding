function problem4(word) {
  // 제한사항 : word는 길이가 1 이상 1,000 이하인 문자열이다.
  if (1 <= word.length <= 1000) {
    const answer = [...word]
    .map((i) => {
      if (i.charCodeAt() < 91 && i.charCodeAt() > 64) {
        return String.fromCharCode(155 - i.charCodeAt());
      } else if (i.charCodeAt() < 123 && i.charCodeAt() > 96) {
        return String.fromCharCode(219 - i.charCodeAt());
      }
      return i;
    })
    .join("");
  return answer;
  }
  else {
    return "Word is too long"
  } 
}

module.exports = problem4;
