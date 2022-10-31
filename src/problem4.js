const lowercases = [
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
const uppercases = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function getGreenFrogLetter(letter) {
  const isLetterAlpabet =
    uppercases.includes(letter) || lowercases.includes(letter);
  if (!isLetterAlpabet) {
    return letter;
  }

  let greenFrogLetter;
  let indexOfLetter;
  if (letter === letter.toUpperCase()) {
    indexOfLetter = uppercases.indexOf(letter);
    greenFrogLetter = uppercases[uppercases.length - indexOfLetter - 1];
  } else {
    indexOfLetter = lowercases.indexOf(letter);
    greenFrogLetter = lowercases[lowercases.length - indexOfLetter - 1];
  }

  return greenFrogLetter;
}

function getGreenFrogWord(word) {
  const frogWord = [...word]
    .map((letter) => getGreenFrogLetter(letter))
    .join('');

  return frogWord;
}

function problem4(word) {
  const answer = getGreenFrogWord(word);
  return answer;
}

module.exports = problem4;
