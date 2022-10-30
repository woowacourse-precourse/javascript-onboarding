function problem4(word) {
  let result = "";
  let ascii;

  // 소문자 알파벳 a, z ascii code
  const asciia = "a".charCodeAt(0);
  const asciiz = asciia + 25;

  // 대문자 알파벳 A, Z ascii code
  const asciiA = "A".charCodeAt(0);
  const asciiZ = asciiA + 25;

  // 각 문자를 ascii code로 변환
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    if ("a" <= ch && ch <= "z") {
      ascii = ch.charCodeAt(0);
      ch = String.fromCharCode(asciia + asciiz - ascii);
    } else if ("A" <= ch && ch <= "Z") {
      ascii = ch.charCodeAt(0);
      ch = String.fromCharCode(asciiA + asciiZ - ascii);
    }
    result += ch;
  }
  return result;
}

module.exports = problem4;
