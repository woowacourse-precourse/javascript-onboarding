function isAlphabet(str) {
  return /[A-Za-z]/.test(str);
}

function isUpperCase(str) {
  return /[A-Z]/.test(str);
}

function problem4(word) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const upperAlphabet = alpha.map((x) => String.fromCharCode(x));
  const words = [...word]
}

module.exports = problem4;
