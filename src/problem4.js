function problem4(word) {
  let answer = '';
  const UpprerCaseList = [
    'Z',
    'Y',
    'X',
    'W',
    'V',
    'U',
    'T',
    'S',
    'R',
    'Q',
    'P',
    'O',
    'N',
    'M',
    'L',
    'K',
    'J',
    'I',
    'H',
    'G',
    'F',
    'E',
    'D',
    'C',
    'B',
    'A',
  ];
  const LowerCaseList = [
    'z',
    'y',
    'x',
    'w',
    'v',
    'u',
    't',
    's',
    'r',
    'q',
    'p',
    'o',
    'n',
    'm',
    'l',
    'k',
    'j',
    'i',
    'h',
    'g',
    'f',
    'e',
    'd',
    'c',
    'b',
    'a',
  ];

  for (let i = 0; i < word.length; i++) {
    const ASCIICode = word.charCodeAt(i);
    if (ASCIICode === 32) {
      answer += ' ';
    } else if (ASCIICode < 91) {
      const Index = ASCIICode % 65;
      answer += UpprerCaseList[Index];
    } else {
      const Index = ASCIICode % 97;
      answer += LowerCaseList[Index];
    }
  }
  return answer;
}

module.exports = problem4;
