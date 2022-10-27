function problem4(word) {
  if(word === '') return '';
  let answer;
  answer = word.split('').map(letter => {
    if(/[A-Z]/.test(letter)) return String.fromCharCode(90 - (letter.charCodeAt(0) - 65));
    if(/[a-z]/.test(letter)) return String.fromCharCode(122 - (letter.charCodeAt(0) - 97));
    return letter;
  });
  return answer.join('');
}

module.exports = problem4;
