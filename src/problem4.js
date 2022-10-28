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
const reverseAlphabet = (word) => {
  let wordArr = word.split("");
  wordArr.forEach((char, i) => {
    if (isAlphabet(char)) {
      if (isUpperCase(char)) {
        wordArr[i] = String.fromCharCode(
          getAscii("A") + getAscii("Z") - getAscii(char)
        );
      } else {
        wordArr[i] = String.fromCharCode(
          getAscii("a") + getAscii("z") - getAscii(char)
        );
      }
    }
  });
  return wordArr.join("");
};

module.exports = problem4;
