function problem4(word) {
  let answerList = convertByAscii(word);
  console.log(answerList);
}

function convertByAscii(word) {
  answerList = [];
  word.split("").map((letter) => {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      answerList.push(String.fromCharCode(155 - x.charCodeAt(0))); // 155 -> ascii A(65) + Z(90)
    } else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
      answerList.push(String.fromCharCode(219 - letter.charCodeAt(0)));
    } else {
      answerList.push(letter);
    }
  });
  return answerList;
}
problem4("abc");
module.exports = problem4;
