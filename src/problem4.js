function reverseSpeak(char, charCodes) {
  const [lowA, lowZ, uppA, uppZ] = charCodes;
  const curCharCode = getCharCode(char);
  const codePairs = isUppercase(char) ? [uppA, uppZ] : [lowA, lowZ];
  const reverseCode = getReverseCode(...codePairs, curCharCode);

  return getChar(reverseCode);
}

function getReverseCode(startCode, endCode, targetCode) {
  const distFromStart = targetCode - startCode;
  const reverseCode = endCode - distFromStart;

  return reverseCode;
}

function getChar(code) {
  return String.fromCharCode(code);
}

function getCharCode(char) {
  return char.charCodeAt();
}

function isUppercase(char) {
  return /[A-Z]/.test(char);
}

function isAlphabet(char) {
  return /[a-zA-Z]/.test(char);
}

function problem4(word) {
  let answer = '';
  const charCodes = ['a', 'z', 'A', 'Z'].map(getCharCode);

  for (let char of word) {
    answer += isAlphabet(char) ? reverseSpeak(char, charCodes) : char;
  }

  return answer;
}

module.exports = problem4;
