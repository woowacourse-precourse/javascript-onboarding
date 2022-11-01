function problem4(word) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const alphabetReverse = [...alphabet].reverse();
}

module.exports = problem4;
