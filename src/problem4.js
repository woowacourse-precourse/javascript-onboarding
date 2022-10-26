function problem4(word) {
  const codeNumberList = [];
  const answerList = [];

  for (let i = 0; i < word.length; i++) {
    codeNumberList.push(word.charCodeAt(i));
  }

  codeNumberList.forEach((number) => {
    if (number === ' '.charCodeAt(0)) {
      answerList.push(' ');
    } else {
      const opposite = number > 90 ? 219 - number : 155 - number;
      answerList.push(String.fromCharCode(opposite));
    }
  });

  return answerList.join('');
}

module.exports = problem4;
