function problem4(word) {
  var answer;

  const capitalConverter = capitalLetter => {

    const capitalLetterNumber = capitalLetter.charCodeAt();
    const convertedNumber = 155 - capitalLetterNumber;
    const convertedLetter = String.fromCharCode(convertedNumber);

    return convertedLetter;
  }

  

  return answer;
}

module.exports = problem4;
