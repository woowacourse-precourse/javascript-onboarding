// 알파벳을 불러오는 함수
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

//string을 array로 바꿔주는 함수
function wordToArray(word) {
  let wordArrays = word.split("");

  return wordArrays;
}

// 공백이 아닌 소문자인지 판단하는 함수
function checkLowerCase(alphabet) {
  if (alphabet !== " " && alphabet.toLowerCase() === alphabet) {
    return true;
  }
}

// 공백이 아닌 대문자인지 판단하는 함수
function checkUpperCase(alphabet) {
  if (alphabet !== " " && alphabet.toUpperCase() === alphabet) {
    return true;
  }
}
// array의 index를 뒤짚어주는함수
function reverseWord(lowerWord, upperWord) {
  const revLowerCase = [...lowerWord].reverse();
  const revUpperCase = [...upperWord].reverse();

  return [revLowerCase, revUpperCase];
}

// 알파벳을 입력받아 대문자면 소문자로, 소문자면 대문자로 청개구리화 시켜주는 함수
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

// array를 string으로 전환하는 함수
function arrayToString(wordArray) {
  wordArray = wordArray.join("");

  return wordArray;
}

// 청개구리화 array를 입력받아 string으로 리턴하는 함수
function problem4(word) {
  const convertedWordArray = convertAlphabet(word);
  const answerWord = arrayToString(convertedWordArray);

  return answerWord;
}
module.exports = problem4;
