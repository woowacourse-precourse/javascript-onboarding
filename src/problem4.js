function problem4(word) {
  var answer;

  const capitalLetterConverter = capitalLetter => {

    const capitalLetterNumber = capitalLetter.charCodeAt();
    const convertedNumber = 155 - capitalLetterNumber;
    const convertedCapitalLetter = String.fromCharCode(convertedNumber);

    return convertedCapitalLetter;
  };

  const smallLetterConverter = smallLetter => {

    const smallLetterNumber = smallLetter.charCodeAt();
    const convertedNumber = 219 - smallLetterNumber;
    const convertedSmallLetter = String.fromCharCode(convertedNumber);

    return convertedSmallLetter;
  };


  return answer;
}

module.exports = problem4;
