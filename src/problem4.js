function isAlphabet(val) {
  if ((val >= 65 && val <= 90) || (val >= 97 && val <= 122)) return 1;
  else return 0;
}

function isUpper(val) {
  if (val === val.toUpperCase()) return 1;
  else return 0;
}

function problem4(word) {
  var answer;
  let answerArr = [];
  for (let i = 0; i < word.length; i++) {
    let charAscii = word.charCodeAt(i);
    if (isAlphabet(charAscii)) {
      if (isUpper(word[i])) {
        charAscii = 155 - charAscii;
      } else {
        charAscii = 219 - charAscii;
      }
      answerArr.push(String.fromCharCode(charAscii));
    } else {
      answerArr.push(word[i]);
    }
  }
  answer = answerArr.join("");
  return answer;
}

// console.log(problem4("I.... love you"));

module.exports = problem4;
