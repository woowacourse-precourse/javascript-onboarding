function problem4(word) {
  var answer;
  var x = [
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
  var arr = [];

  // * word 길이가 1이상 1000이하인 문자열일 때
  if (word.length >= 1 && word.length <= 1000) {
    for (var i = 0; i < word.length; i++) {
      for (var j = 0; j < x.length; j++) {
        if (word[i] == x[j].toUpperCase()) {
          // * 대문자면 대문자 그대로 출력
          arr.push(x[25 - j]);
        } else if (word[i] == x[j].toLowerCase()) {
          // * 소문자면 소문자 출력
          arr.push(x[25 - j].toLowerCase());
        }
      }
      if (word[i] == " ") {
        // * 공백은 공백 그대로 출력
        arr.push(" ");
      }
    }
  }

  answer = arr.join("");
  return answer;
}

module.exports = problem4;
