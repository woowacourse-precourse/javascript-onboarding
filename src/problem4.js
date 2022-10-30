const isUpperCase = (char) => char.toUpperCase() === char;

function problem4(word) {
  const alphas = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 65)
  );
  const reversedAlphas = [...alphas].reverse();

  return word.split("").reduce((reduced, char) => {
    let copy = reduced;
    const idx = alphas.indexOf(char.toUpperCase());
    if (idx === -1) {
      copy += " ";
    } else {
      copy += isUpperCase(char)
        ? reversedAlphas[idx]
        : reversedAlphas[idx].toLowerCase();
    }

    return copy;
  }, "");
}

module.exports = problem4;
