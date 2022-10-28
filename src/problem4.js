function problem4(word) {
  let result = '';

  for (let i = 0; i < word.length; i += 1) {
    const currentChar = word[i];

    if (currentChar === ' ') {
      result += currentChar;
      continue;
    }

    const currentCharCode = currentChar.charCodeAt(0);
    let reversedCharCode;

    if (currentChar === currentChar.toUpperCase()) {
      reversedCharCode = 90 - currentCharCode + 65;
    } else {
      reversedCharCode = 122 - currentCharCode + 97;
    }

    result += String.fromCharCode(reversedCharCode);
  }

  return result;
}

module.exports = problem4;
