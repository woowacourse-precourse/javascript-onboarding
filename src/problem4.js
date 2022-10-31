function problem4(word) {
  let answerArr = [];

  for(let i=0; i<word.length; i++) {
    let char = word[i];

    if (char === char.toUpperCase()) {
      answerArr.push(handleUpperCase(char));
    }

    if (char === char.toLowerCase()) {
      answerArr.push(handleSmallCase(char));
    }

    if (char === ' ') {
      answerArr.push(' ');
    }
  }

  return answerArr.join("");
}

module.exports = problem4;
