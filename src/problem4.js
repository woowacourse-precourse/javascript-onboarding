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
  var regex = /[a-zA-Z]/;

  // * word 길이가 1이상 1000이하인 문자열일 때
  if (word.length >= 1 && word.length <= 1000) {
    for (var i = 0; i < word.length; i++) {
      // * word의 문자열이 소문자나 대문자 영어일때
      if (regex.test(word[i])) {
        for (var j = 0; j < x.length; j++) {
          if (word[i] == x[j]) {
            // * 대문자면 대문자 push
            arr.push(x[25 - j]);
          } else if (word[i] == x[j].toLowerCase()) {
            // * 소문자면 소문자 push
            arr.push(x[25 - j].toLowerCase());
          }
        }
      } else {
        // * 영문이 아니면 그대로 push
        arr.push(word[i]);
      }
    }
  }

  // * arr를 문자열로 join
  answer = arr.join("");
  return answer;
}

module.exports = problem4;
