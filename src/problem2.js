let resWord = "";
const findDuplication = (cryptogram) => {
  let words = "";
  let newCryptogram = "";
  let pointer = 0;

  while (pointer < cryptogram.length) {
    if (words === "") {
      words = cryptogram[pointer];
    } else if (words[0] === cryptogram[pointer]) {
      words += cryptogram[pointer];
    } else if (words[0] !== cryptogram[pointer]) {
      if (words.length > 1) {
        words = cryptogram[pointer];
      } else {
        newCryptogram += words;
        words = cryptogram[pointer];
      }
    }
    pointer++;
  }

  if (words.length === 1) {
    newCryptogram += words;
  }

  if (cryptogram !== newCryptogram) {
    findDuplication(newCryptogram);
  } else if (cryptogram === newCryptogram) {
    resWord = newCryptogram;
    return newCryptogram;
  }
};

function problem2(cryptogram) {
  findDuplication(cryptogram);
  let answer = resWord;
  return answer;
}

module.exports = problem2;
