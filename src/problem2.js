function problem2(cryptogram) {
  let answer;
  let wordArray = cryptogram.split("");

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === wordArray[i + 1]) {
      wordArray.splice(i, 2);
      i = -1;
    }
  }

  answer = wordArray.join("");
  return answer;
}

module.exports = problem2;
