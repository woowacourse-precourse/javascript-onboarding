function problem4(word) {
  var answer;
  let frogDict = {
    "A": "Z",
    "B": "Y",
    "C": "X",
    "D": "W",
    "E": "V",
    "F": "U",
    "G": "T",
    "H": "S",
    "I": "R",
    "J": "Q",
    "K": "P",
    "L": "O",
    "M": "N",
    "N": "M",
    "O": "L",
    "P": "K",
    "Q": "J",
    "R": "I",
    "S": "H",
    "T": "G",
    "U": "F",
    "V": "E",
    "W": "D",
    "X": "C",
    "Y": "B",
    "Z": "A"
  }

  let i = 0;
  do {
    for (let j = 0; j < Object.keys(frogDict).length; j++) {
      let key = Object.keys(frogDict)[j];
      if (word[i] === key) {
        // console.log(word[i], '대문자');
        console.log(key, 'key');
      } else if (word[i] === key.toLowerCase()) {
        // console.log(word[i], '소문자'); 
        console.log(key, 'key');
      }
    }

    i++;
  } while (i < word.length)

  return answer;
}

module.exports = problem4;
