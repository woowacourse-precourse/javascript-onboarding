function alphabetGather() {
  const upperWord = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowerWord = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return [lowerWord, upperWord];
}

function wordToArray(word) {
  let wordArrays = word.split("");

  return wordArrays;
}

function checkLowerCase(alphabet) {
  if (alphabet !== " " && alphabet.toLowerCase() === alphabet) {
    return true;
  }
}

function checkUpperCase(alphabet) {
  if (alphabet !== " " && alphabet.toUpperCase() === alphabet) {
    return true;
  }
}

function reverseWord(lowerWord, upperWord) {
  const revLowerCase = [...lowerWord].reverse();
  const revUpperCase = [...upperWord].reverse();

  return [revLowerCase, revUpperCase];
}

function convertAlphabet(word) {
  const [lowerWord, upperWord] = alphabetGather();
  const [revLowerCase, revUpperCase] = reverseWord(lowerWord, upperWord);

  let convertedWordArray = wordToArray(word);

  convertedWordArray.forEach((alphabet, index) => {
    if (checkLowerCase(alphabet) === true) {
      let wordLowerIndex = lowerWord.indexOf(alphabet);
      convertedWordArray[index] = revLowerCase[wordLowerIndex];
    }

    if (checkUpperCase(alphabet) === true) {
      let wordUpperIndex = upperWord.indexOf(alphabet);
      convertedWordArray[index] = revUpperCase[wordUpperIndex];
    }
  });

  return convertedWordArray;
}

function arrayToString(wordArray) {
  wordArray = wordArray.join("");

  return wordArray;
}

function problem4(word) {
  const convertedWordArray = convertAlphabet(word);
  const answerWord = arrayToString(convertedWordArray);

  return answerWord;
}
module.exports = problem4;
