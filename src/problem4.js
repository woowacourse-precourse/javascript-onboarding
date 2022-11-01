function isAlphabet(char) {
  return /[a-zA-Z]/.test(char);
}

function translateIntoFrogLang(char) {
  if (!isAlphabet(char)) return char;

  const ascii_Z = "Z".charCodeAt(0);
  const ascii_A = "A".charCodeAt(0);
  const ascii_z = "z".charCodeAt(0);
  const ascii_a = "a".charCodeAt(0);
  const ascii = char.charCodeAt(0);

  switch (Math.round(ascii / 10)) {
    // 대문자
    case 7:
    case 8:
    case 9:
      return String.fromCharCode(ascii_Z - ascii + ascii_A);
    // 소문자
    case 10:
    case 11:
    case 12:
      return String.fromCharCode(ascii_z - ascii + ascii_a);
  }
}

function problem4(word) {
  const wordArr = word.split("");
  return wordArr.reduce((acc, cur) => (acc += translateIntoFrogLang(cur)), "");
}

module.exports = problem4;
