function problem4(word) {
  const alphas = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 65)
  );
  const reversedAlphas = [...alphas].reverse();

  let result = "";
  for (let char of word) {
    const idx = alphas.indexOf(char.toUpperCase());
    if (idx === -1) {
      result += " ";
    } else {
      result +=
        char.toUpperCase() === char
          ? reversedAlphas[idx]
          : reversedAlphas[idx].toLowerCase();
    }
  }

  return result;
}

module.exports = problem4;
