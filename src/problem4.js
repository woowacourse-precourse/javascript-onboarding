function problem4(word) {
  if (0 > word.length || word.length > 1000)
    return '입력된 문자는 1 이상 1,000 이하의 문자열이여야 합니다.';
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
