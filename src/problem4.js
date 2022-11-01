const ABC_REGEX = /^[a-z|A-Z]+$/;

// 소문자면 false 대문자면 true를 리턴하는 함수
function strIsLower(str) {
  return str === str.toLowerCase();
}

function problem4(word) {
  // 청개구리 알파벳 변환 함수
  function abcFrogConversion(str) {
    return String.fromCharCode((strIsLower(str) ? 219 : 155) - str.charCodeAt(0));
  }

  let ans = '';
  for (let i = 0; i < word.length; i += 1) {
    ans += ABC_REGEX.test(word[i]) ? abcFrogConversion(word[i]) : word[i];
  }

  return ans;
}

module.exports = problem4;
