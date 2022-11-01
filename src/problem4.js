// 기능 목록
// 1. 알파벳인지 체크하기
// 2. 대문자는 대문자로, 소문자는 소문자로
// 3. 알파벳 외의 문자는 변환하지 않기

// 알파벳인지 체크하는 함수
function isAlphabet(char) {
  return "a" <= char.toLowerCase() && char.toLowerCase() <= "z";
}

function problem4(word) {
  let answer = "";
  let reverseWord = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    // char이 알파벳이고,
    if (isAlphabet(char)) {
      // 대문자일 때
      if (char === char.toUpperCase()) {
        answer += reverseWord[char.charCodeAt() - 65];
      }
      // 소문자일 때
      else answer += reverseWord[char.charCodeAt() - 97].toLowerCase();
    }
    // 알파벳이 아닌 경우 변환하지 않기
    else answer += char;
  }

  return answer;
}

module.exports = problem4;
