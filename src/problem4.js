const getAlphabets = () =>
  Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

function problem4(word) {
  const alphabets = getAlphabets();
  const reversedAlphabets = [...alphabets].reverse();

  return [...word]
    .map((ch) => {
      if (ch === " ") return " ";
      const reversed = reversedAlphabets[alphabets.indexOf(ch.toUpperCase())];
      return ch.toUpperCase() === ch ? reversed : reversed.toLowerCase();
    })
    .join("");
}

module.exports = problem4;
