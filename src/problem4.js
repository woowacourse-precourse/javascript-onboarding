function problem4(word) {
  var answer = [];
  let upperList = [
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
  let lowerList = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  for (let i = 0; i < word.length; i++) {
    let index = 0;
    if (upperList.includes(word[i])) {
      index = upperList.indexOf(word[i]);
      index = 25 - index;
      answer.push(upperList[index]);
    } else if (lowerList.includes(word[i])) {
      index = lowerList.indexOf(word[i]);
      index = 25 - index;
      answer.push(lowerList[index]);
    } else {
      answer.push(word[i]);
    }
  }
  return answer.join('');
}

module.exports = problem4;
