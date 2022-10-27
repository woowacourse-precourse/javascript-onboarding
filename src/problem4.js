function problem4(word) {
  if(word === '') return '';
  let answer;
  answer = word.split('').map(letter => {
    if(/[A-Z]/.test(letter)) {
      const reversedLetter = String.fromCharCode(90 - (letter.charCodeAt(0) - 65));
      return reversedLetter;
    }
    if(/[a-z]/.test(letter)) {
      const reversedLetter = String.fromCharCode(122 - (letter.charCodeAt(0) - 97));
      return reversedLetter;
    }
    return letter;
  });
  return answer.join('');
}

module.exports = problem4;
