function problem2(cryptogram) {
  const removeDuplicateWord = (word) => {
    return [...word]
      .map((alphabet, index) => {
        if (alphabet === word[index - 1]) return;

        if (alphabet !== word[index + 1]) return alphabet;

        return "";
      })
      .join("");
  };

  if (removeDuplicateWord(cryptogram) === cryptogram) return cryptogram;

  return problem2(removeDuplicateWord(cryptogram));
}

module.exports = problem2;
