function problem4(word) {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);
    let ascii = char.charCodeAt(0);
    //대문자 소문자 별로 케이스 분류 후,
    //문자별 아스키코드를 전부 더하여 현재 탐색하고 있는 알파벳의 아스키코드만큼 빼주면 거꾸로 된 아스키코드가 나오게 된다.
    //그걸 다시 문자로 변환해 answer에 넣어줌
    if (ascii >= 97 && ascii <= 122) {
      answer += String.fromCharCode(122 + 97 - ascii);
    } else if (ascii >= 65 && ascii <= 90) {
      answer += String.fromCharCode(65 + 90 - ascii);
    } else {
      answer += char;
    }
  }
  return answer;
}

module.exports = problem4;
