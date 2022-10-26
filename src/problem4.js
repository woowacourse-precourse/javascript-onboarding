function problem4(word) {
  var answer = '';
  const dictionary = {
    A: 'Z',
    B: 'Y',
    C: 'X',
    D: 'W',
    E: 'V',
    F: 'U',
    G: 'T',
    H: 'S',
    I: 'R',
    J: 'Q',
    K: 'P',
    L: 'O',
    M: 'N',
    N: 'M',
    O: 'L',
    P: 'K',
    Q: 'J',
    R: 'I',
    S: 'H',
    T: 'G',
    U: 'F',
    V: 'E',
    W: 'D',
    X: 'C',
    Y: 'B',
    Z: 'A',
  };

  for (let letter of word) {
    answer += convertLetterByDictionary(letter, dictionary);
  }

  return answer;
}

function convertLetterByDictionary(letter, dictionary) {
  if (letter === ' ') {
    return ' ';
  }

  if (isLower(letter)) {
    return dictionary[letter.toUpperCase()].toLowerCase();
  }

  if (isUpper(letter)) {
    return dictionary[letter];
  }
}

function isUpper(string) {
  return string.match(new RegExp(/^[A-Z]/)) !== null;
}

function isLower(string) {
  return string.match(new RegExp(/^[a-z]/)) !== null;
}

console.log(problem4('I love you'));

module.exports = problem4;
