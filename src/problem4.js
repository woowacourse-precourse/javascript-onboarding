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
  const result = words.map(w => {
    if (!isAlphabet(w)) {
      return w;
    }
    const index = upperAlphabet.findIndex(alpha => alpha === w.toUpperCase());
    const convertedIndex = upperAlphabet.length - index - 1;
    return isUpperCase(w) ? upperAlphabet[convertedIndex] : upperAlphabet[convertedIndex].toLowerCase();
  });
  return result.join('');
}

module.exports = problem4;
