// 청개구리 사전
const CAPITAL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SMALL = "abcdefghijklmnopqrstuvwxyz";

function problem4(word) {
  if (word.length < 1 || word.length > 1000) {
    return -1;
  }
  // 청개구리 사전에서 반환된 문자로 채울 빈 문자열을 만든다.
  let result = "";

  for (let i = 0; i < word.length; i++) {
    const type = word[i];
    if (/[A-Z]/.test(type)) {
      result += converCapital(type);
    } else if (/[a-z]/.test(type)) {
      result += converSmall(type);
    } else {
      result += word[i];
    }
  }
  return result;
}

module.exports = problem4;
