function problem4(word) {
  const dictionary = generateDic(word);

  const reversedWord = word
    .split('')
    .reduce((a, c) => (a += dictionary[c]), '');

  return reversedWord;
}

const generateDic = (word) => {
  return word.split('').reduce((a, c) => {
    if (c === ' ') {
      a[c] = ' ';
      return a;
    }
    if (c.charCodeAt() > 90) {
      a[c] = String.fromCharCode(122 - (c.charCodeAt() - 97));
      return a;
    } else {
      a[c] = String.fromCharCode(90 - (c.charCodeAt() - 65));
      return a;
    }
  }, {});
};

module.exports = problem4;
