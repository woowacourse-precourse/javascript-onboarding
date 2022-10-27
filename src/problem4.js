function problem4(word) {
  const alphabetRegex = /[a-zA-Z]/;

  let answer = word.split('').reduce((prevResult, c) => {
    if (alphabetRegex.test(c)) {
      return prevResult + frogTranslate(c);
    }

    return prevResult + c;
  }, '');

  return answer;
}

module.exports = problem4;
