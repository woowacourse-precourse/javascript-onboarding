function problem2(cryptogram) {
  const removeSameWord = (word) => {
    const wordArray = [...word];
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === wordArray[i + 1]) {
        wordArray.splice(i, 2, "");
      }
    }
    const newArray = wordArray.filter((el) => el !== "");
    return newArray.join("");
  };

  answer = removeSameWord(cryptogram);

  for (let i = 0; i < cryptogram.length; i++) {
    answer = removeSameWord(answer);
  }

  var answer;
  return answer;
}

module.exports = problem2;
