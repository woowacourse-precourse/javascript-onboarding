const FROG_DICTIONARY = {
  a: 'z',
  b: 'y',
  c: 'x',
  d: 'w',
  e: 'v',
  f: 'u',
  g: 't',
  h: 's',
  i: 'r',
  j: 'q',
  k: 'p',
  l: 'o',
  m: 'n',
  n: 'm',
  o: 'l',
  p: 'k',
  q: 'j',
  r: 'i',
  s: 'h',
  t: 'g',
  u: 'f',
  v: 'e',
  w: 'd',
  x: 'c',
  y: 'b',
  z: 'a',
};

function checkEnglish(spelling) {
  const regExp = /[a-zA-Z]/g;
  return regExp.test(spelling);
}

function getFrogSpelling(spelling) {
  if (spelling === spelling.toUpperCase()) {
    const lowerCaseSpelling = spelling.toLowerCase();
    const newFrogWord = FROG_DICTIONARY[lowerCaseSpelling];
    return newFrogWord.toUpperCase();
  }

  return FROG_DICTIONARY[spelling];
}

function problem4(word) {
  const wordArr = word.split('');

  wordArr.forEach((spelling, index) => {
    if (checkEnglish(spelling)) {
      wordArr[index] = getFrogSpelling(spelling);
    }
  });

  return wordArr.join('');
}

module.exports = problem4;
