function problem4(word) {
  if(word === '') return '';
  const ASCII_VALUES = {
    UPPER_CASE_REGEX: /[A-Z]/,
    UPPER_CASE_START: 65,
    UPPER_CASE_END: 90,

    LOWER_CASE_REGEX: /[a-z]/,
    LOWER_CASE_START: 97,
    LOWER_CASE_END: 122,
  };
  const answer = word.split('').map(letter => {
    if(ASCII_VALUES.UPPER_CASE_REGEX.test(letter)) {
      const reversedAsciiCode = ASCII_VALUES.UPPER_CASE_END - (letter.charCodeAt(0) - ASCII_VALUES.UPPER_CASE_START);
      const reversedLetter = String.fromCharCode(reversedAsciiCode);
      return reversedLetter;
    }
    if(ASCII_VALUES.LOWER_CASE_REGEX.test(letter)) {
      const reversedAsciiCode = ASCII_VALUES.LOWER_CASE_END - (letter.charCodeAt(0) - ASCII_VALUES.LOWER_CASE_START)
      const reversedLetter = String.fromCharCode(reversedAsciiCode);
      return reversedLetter;
    }
    return letter;
  }).join('');
  return answer;
}

module.exports = problem4;
