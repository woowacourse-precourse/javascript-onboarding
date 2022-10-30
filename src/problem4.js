function problem4(word) {
  // 1. 기본 알파벳 + reverse로 소문자 기본 재료 준비, 이번은 문자열로 준비
  const lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const reverseLow = lowAlphabet.split("").reverse().join("");
  const uppAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const reverseUpp = uppAlphabet.split("").reverse().join("");

  // 2. 문자열 주고 돌면서 조건에 맞추기, match
  // 3. 대문자, 소문자, 그외 문자(띄어쓰기 등) 조건으로
  // 4. 조건에 맞는 문자열이면 각 항목에 맞게 넣어주기, low/upp
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    // 조건1: 대문자일 때의 인덱스 검색 후 맞는 인덱스의 reverse로
    if (word[i].match(/[A-Z]/g)) {
      answer += reverseUpp[uppAlphabet.indexOf(word[i])];
    }
    // 조건2: 소문자일 때의 인덱스 검색 후 맞는 인덱스의 reverse로
    else if (word[i].match(/[a-z]/g)) {
      answer += reverseLow[lowAlphabet.indexOf(word[i])];
    }
    // 조건3: 그 외 문자는 그대로 기입
    else {
      answer += word[i];
    }
  }
  return answer;
}

module.exports = problem4;
