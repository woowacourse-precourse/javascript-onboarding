function problem4(word) {
  var answer = [];

  const frogDictionary = {
    65 : "Z",
    66 : "Y",
    67 : "X",
    68 : "W",
    69 : "V",
    70 : "U",
    71 : "T",
    72 : "S",
    73 : "R",
    74 : "Q",
    75 : "P",
    76 : "O",
    77 : "N",
    78 : "M",
    79 : "L",
    80 : "K",
    81 : "J",
    82 : "I",
    83 : "H",
    84 : "G",
    85 : "F",
    86 : "E",
    87 : "D",
    88 : "C",
    89 : "B",
    90 : "A",
    97 : "z",
    98 : "y",
    99 : "x",
    100 : "w",
    101 : "v",
    102 : "u",
    103 : "t",
    104 : "s",
    105 : "r",
    106 : "q",
    107 : "p",
    108 : "o",
    109 : "n",
    110 : "m",
    111 : "l",
    112 : "k",
    113 : "j",
    114 : "i",
    115 : "h",
    116 : "g",
    117 : "f",
    118 : "e",
    119 : "d",
    120 : "c",
    121 : "b",
    122 : "a"
  }

  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) == 32) {
      answer.push(' ');
    } else {
      answer.push(frogDictionary[word.charCodeAt(i)]);
    }
  }

  answer = answer.join('');

  return answer;
}

module.exports = problem4;
