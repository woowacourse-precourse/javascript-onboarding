function problem2(cryptogram) {
  var answer;

  let originWord = cryptogram;
  let check = 1;

  while (check === 1) {
    check = 0;
    let word = "";
    let i = 0;
    for (i = 0; i < originWord.length - 1; i++) {
      if (originWord[i] === originWord[i + 1]) {
        i++;
        check = 1;
      } else {
        word += originWord[i];
        if (i === originWord.length - 1) {
          word += originWord[i - 1];
        }
      }
    }
    word += originWord[i];
    originWord = word;
  }
  if (originWord === "undefined") answer = "";
  else answer = originWord;

  return answer;
}

module.exports = problem2;
