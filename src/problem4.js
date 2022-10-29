function problem4(word) {
  let answer;
  const upperCaseTest = /[A-Z]/;
  const lowerCaseTest = /[a-z]/;
  const original = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let idx = 0;

  word = [...word];

  for (var i = 0; i < word.length; i++) {
    if (upperCaseTest.test(word[i])) {
      idx = original.indexOf(word[i]) + 1;
      word[i] = original.slice(-idx)[0];
    } else if (lowerCaseTest.test(word[i])) {
      idx = original.indexOf(word[i].toUpperCase()) + 1;
      word[i] = original.slice(-idx)[0].toLowerCase();
    }
  }

  answer = word.join("");

  return answer;
}

module.exports = problem4;
