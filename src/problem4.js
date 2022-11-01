// 기능 목록
// 1. 알파벳인지 체크하기
// 2. 대문자는 대문자로, 소문자는 소문자로
// 3. 알파벳 외의 문자는 변환하지 않기

// 알파벳인지 체크하는 함수
function isAlphabet(str) {
  return "a" <= str.toLowerCase() && str.toLowerCase() <= "z";
}

function problem4(word) {
  let answer = "";
  let reverseWord = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

  for (let i = 0; i < word.length; i++) {
    let str = word[i];

    // 대문자일 때
    if (str === str.toUpperCase()) {
      answer += reverseWord[str.charCodeAt() - 65];
    }
    // 소문자일 때
    else if (str === str.toLowerCase()) {
      answer += reverseWord[str.charCodeAt() - 97].toLowerCase();
    }
    // 알파벳이 아닌 경우 변환하지 않기
    else answer += str;
  }

  return answer;
}

module.exports = problem4;
