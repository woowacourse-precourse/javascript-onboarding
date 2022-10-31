// 1. 대문자 소문자 배열을 만든 후
// 2. 입력값을 배열로 변환한다.
// 3. (25 - 각 값의 인덱스) 값이 해당 값의 거꾸로된 값이 있는 인덱스이다.
// 4. 3번 값을 이용해 새로운 배열에 바꾼 문자열을 추가하며 for을 돌린다.

function problem4(word) {
  var uppercase = [
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
  var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var wordArr = word.split("");
  var newWordArr = "";

  for (var i = 0; i < wordArr.length; i++) {
    if (wordArr[i] == " ") {
      // 띄어 쓰기 일때는 그대로 함
      newWordArr += " ";
    } else {
      if (wordArr[i] == wordArr[i].toLowerCase()) {
        // 소문자 일 때
        newWordArr += lowercase[25 - lowercase.indexOf(wordArr[i])];
      }
      if (wordArr[i] == wordArr[i].toUpperCase()) {
        // 대문자 일 때
        newWordArr += uppercase[25 - uppercase.indexOf(wordArr[i])];
      }
    }
  }
  return newWordArr;
}

module.exports = problem4;
