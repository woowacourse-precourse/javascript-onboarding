function problem4(word) {
  var answer = '';
  let list = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  for (let i = 0; i < word.length; i++) {
    let regexpStr = /([a-z]|[A-Z])/;
    let regexpUpper = /[A-Z]/g;
    if (regexpStr.test(word[i])) {
      if (regexpUpper.test(word[i])) {
        answer = answer + list.reverse()[25 - list.indexOf(word[i])];
      } else {
        answer =
          answer +
          list
            .reverse()
            [25 - list.indexOf(word[i].toUpperCase())].toLowerCase();
      }
    } else {
      answer = answer + word[i];
    }
  }
  return answer;
}

module.exports = problem4;
