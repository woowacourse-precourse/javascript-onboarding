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


  const alphabetConverter = letter => {

    let convertedLetter = ''; 
    
    if(letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      convertedLetter = capitalLetterConverter(letter) 
    } else if(letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
      convertedLetter = smallLetterConverter(letter) 
    } else {
      convertedLetter = letter;
    }

    return convertedLetter;
  }
  
  return answer;
}

module.exports = problem4;
