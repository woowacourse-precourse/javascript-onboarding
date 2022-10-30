function problem4(word) {
  const uppercases = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
  const lowercases = uppercases.map((letter) => letter.toLowerCase());
}

module.exports = problem4;
