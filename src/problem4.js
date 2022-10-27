function problem4(word) {
  var answer;

  // 문자열 변환표(객체)
  let invertCase = {};
  let gap = 25;
  for (let i = "A".codePointAt(0); i <= "Z".codePointAt(0); i++) {
    invertCase[String.fromCodePoint(i)] = String.fromCodePoint(i + gap);
    invertCase[String.fromCodePoint(i + 32)] = String.fromCodePoint(
      i + 32 + gap
    );
    gap -= 2;
  }

  // 문자열 뒤집기
  let reversedWord = "";
  for (let char of word) {
    char == " " ? (reversedWord += " ") : (reversedWord += invertCase[char]);
  }

  answer = reversedWord;
  return answer;
}

module.exports = problem4;
