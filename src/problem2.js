function problem2(cryptogram) {
  const findDuplicateWord = (word) =>
    [...word]
      .map((alphabet, index) => {
        if (alphabet === word[index - 1]) return;

        if (alphabet !== word[index + 1]) return alphabet;
        // alphabet === word[index]
        return "";
      })
      .join("");
}

module.exports = problem2;
