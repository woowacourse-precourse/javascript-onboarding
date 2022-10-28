// 기능 목록
// 1. 공백 예외 처리
// 2. 대문자는 대문자로, 소문자는 소문자로
// 3. 제한사항 처리(알파벳 외의 문자는 변환하지 않기)

function problem4(word) {
  let answer = "";
  let reverseWord = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

  for (let i = 0; i < word.length; i++) {
    let str = word[i];
    // 공백 예외 처리
    if (str === " ") answer += " ";
    // 대문자일 때
    else if (str === str.toUpperCase()) {
      answer += reverseWord[str.charCodeAt() - 65];
    }
    // 소문자일 때
    else if (str === str.toLowerCase()) {
      answer += reverseWord[str.charCodeAt() - 97].toLowerCase();
    }
    // 제한 사항 처리
    else answer += str;
  }

  return answer;
}

module.exports = problem4;
