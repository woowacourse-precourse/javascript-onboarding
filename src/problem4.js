function problem4(word) {
  let answerList = convertByAscii(word);
  return answerList.join("");
}

function convertByAscii(word) {
  answerList = [];
  word.split("").map((letter) => {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      answerList.push(String.fromCharCode(155 - letter.charCodeAt(0)));
    } else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
      answerList.push(String.fromCharCode(219 - letter.charCodeAt(0)));
    } else {
      answerList.push(letter);
    }
  });
  return answerList;
}

module.exports = problem4;
