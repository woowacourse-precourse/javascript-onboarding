function problem4(word) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const upperAlphabet = alphabet.map((x) => x.toUpperCase());
  let reverseAlphabet = [];
  for (let i = 0; i < alphabet.length; i++) {
    reverseAlphabet.unshift(alphabet[i]);
  }
  const upperReverseAlphabet = reverseAlphabet.map((x) => x.toUpperCase());

  let result = '';

  const array = word.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== ' ' && array[i] === array[i].toUpperCase()) {
      result += upperReverseAlphabet[upperAlphabet.indexOf(array[i])];
    } else if (array[i] !== ' ' && array[i] === array[i].toLowerCase()) {
      result += reverseAlphabet[alphabet.indexOf(array[i])];
    } else if (array[i] === ' ') {
      result += ' ';
    } else result += array[i];
  }
  return result;
}

module.exports = problem4;
