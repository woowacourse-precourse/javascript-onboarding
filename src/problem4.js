function problem4(word) {
  var answer = '';
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      answer = answer + String.fromCodePoint(91 - (word.charCodeAt(i) - 64));
    } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
      answer = answer + String.fromCodePoint(123 - (word.charCodeAt(i) - 96));
    } else {
      answer = answer + ' ';
    }
  }

  return answer;
}

module.exports = problem4;

problem4('I love you');
