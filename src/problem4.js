function isUpperCase(char) {
  return char.toUpperCase() === char;
}

function reverseCharacter(char) {
  let index = 0;
  const A = 65;
  const Z = 90;
  const a = 97;
  const z = 122;

  const asciiChar = char.charCodeAt(index);

  if (isUpperCase(char)) {
    return String.fromCharCode(Z - asciiChar + A);
  }

  return String.fromCharCode(z - asciiChar + a);
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
