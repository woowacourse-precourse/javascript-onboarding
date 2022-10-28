function problem4(word) {
  const answer = reverseAlphabet(word);
  return answer;
}
const isAlphabet = (char) => {
  return /^[a-zA-Z]+$/.test(char);
};
const isUpperCase = (char) => {
  return /^[A-Z]+$/.test(char);
};
const getAscii = (char) => {
  return char.charCodeAt(0);
};
const reverseCharacter = (char) => {
  if (isUpperCase(char)) {
    return String.fromCharCode(getAscii("A") + getAscii("Z") - getAscii(char));
  } else {
    return String.fromCharCode(getAscii("a") + getAscii("z") - getAscii(char));
  }
};
const reverseAlphabet = (word) => {
  const wordArr = word.split("");
  wordArr.forEach((char, i) => {
    if (isAlphabet(char)) {
      wordArr[i] = reverseCharacter(char);
    }
  });
  return wordArr.join("");
};

module.exports = problem4;
