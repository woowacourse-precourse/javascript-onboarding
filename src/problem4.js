function problem4(word) {
  let answer = word;
  let length = word.length;

  for (let index = 0; index < length; index++) {
    const isCapital = /^[A-Z]+$/;
    const isSmall = /^[a-z]+$/;

    if (isCapital.test(word[index])) {
      answer[index] = frogDictionary(word[index], "capital");
    } else if (isSmall.test(word[index])) {
      answer[index] = frogDictionary(word[index], "small");
    }
  }
  return answer;
}

function frogDictionary(char, capitalOrSmall) {}

module.exports = problem4;