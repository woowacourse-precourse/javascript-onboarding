function problem2(cryptogram) {
  const findDuplicateWord = (word) =>
    [...word]
      .map((alphabet, index) => {
        if (alphabet === word[index - 1]) return;

        if (alphabet !== word[index + 1]) return alphabet;

        return "";
      })
      .join("");

  if (findDuplicateWord(cryptogram) === cryptogram) return cryptogram;

  return problem2(findDuplicateWord(cryptogram));
}

module.exports = problem2;
