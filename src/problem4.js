function problem4(word) {
  let answer = [];

  for (let character of word) {
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const LENGTH = 26;
    
    if (character === ' ') {
      answer.push(' ');
    }

    if (lowerCase.includes(character)) {
      answer.push(lowerCase[LENGTH - lowerCase.indexOf(character) - 1]);
    }

    if (upperCase.includes(character)) {
      answer.push(upperCase[LENGTH - upperCase.indexOf(character) - 1]);
    }
  }

  answer = answer.join('');

  return answer;
}

module.exports = problem4;
