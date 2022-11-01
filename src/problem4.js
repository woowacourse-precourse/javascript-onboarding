const getAlphabets = () =>
  Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const getAlphabetIdx = (alphabets, ch) => alphabets.indexOf(ch.toUpperCase());

const judgeAlphabetCase = ({ target, origin }) =>
  target.toUpperCase() === target ? origin : origin.toLowerCase();

function problem4(word) {
  const alphabets = getAlphabets();
  const reversedAlphabets = [...alphabets].reverse();

  return [...word]
    .map((ch) => {
      if (ch === " ") return " ";
      const reversed = reversedAlphabets[getAlphabetIdx(alphabets, ch)];
      return judgeAlphabetCase({ target: ch, origin: reversed });
    })
    .join("");
}

module.exports = problem4;
