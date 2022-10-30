function problem4(word) {
  const uppercases = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
  const lowercases = uppercases.map((letter) => letter.toLowerCase());

  word.split('').forEach((letter) => {
    const indexOfUppercase = uppercases.indexOf(letter);
    const indexOfLowercase = lowercases.indexOf(letter);
  });
}

module.exports = problem4;
