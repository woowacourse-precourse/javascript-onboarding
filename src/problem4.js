function problem4(word) {
  let answer;

  const wordArr = word.split("");
  const dictionary = {};

  let i = 97;
  let j = 122;

  while (i < 123) {
    dictionary[String.fromCharCode(i)] = String.fromCharCode(j);
    i++;
    j--;
  }

  for (let i = 0; i < wordArr.length; i++) {
    const lowerCaseWord = wordArr[i].toLowerCase();
    if (lowerCaseWord in dictionary) {
      const isUpperCase = wordArr[i] === wordArr[i].toUpperCase();
      wordArr[i] = isUpperCase
        ? dictionary[lowerCaseWord].toUpperCase()
        : dictionary[wordArr[i]];
    }
  }

  answer = wordArr.join("");

  return answer;
}

module.exports = problem4;
