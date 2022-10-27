function problem4(word) {
  let lesson = word.toUpperCase().split("");
  const normArr = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  const reverseArr = [...normArr].reverse();
}

module.exports = problem4;
