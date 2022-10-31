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

function handleUpperCase(char) {
  const upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return changeChar(upperArr, char);
}

module.exports = problem4;
