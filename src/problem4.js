function isUpperCase(char) {
  return char.toUpperCase() === char;
}

function reverseCharacter(char) {
  const index = 0;
  const A = "A".charCodeAt(index); // 65
  const Z = "Z".charCodeAt(index); // 90
  const a = "a".charCodeAt(index); // 97
  const z = "z".charCodeAt(index); // 122

  const asciiChar = char.charCodeAt(index);

  if (isUpperCase(char)) {
    return String.fromCharCode(Z - asciiChar + A);
  }

  return String.fromCharCode(z - asciiChar + a);
}

function isAlphabet(char) {
  const A = "A".charCodeAt(index);
  const Z = "Z".charCodeAt(index);
  const a = "a".charCodeAt(index);
  const z = "z".charCodeAt(index);

  const asciiChar = char.charCodeAt(index);

  return (
    (asciiChar >= A && asciiChar <= Z) || (asciiChar >= a && asciiChar <= z)
  );
}

function problem4(word) {
  var answer;

  return answer;
}

module.exports = problem4;
