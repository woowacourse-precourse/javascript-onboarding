function problem4(word) {
  const codeNumberList = [];
  const answerList = [];
  const lastUpperCase = 'Z'.charCodeAt(0);
  const upperCaseSum = 'A'.charCodeAt(0) + 'Z'.charCodeAt(0);
  const lowerCaseSum = 'a'.charCodeAt(0) + 'z'.charCodeAt(0);

  for (let i = 0; i < word.length; i++) {
    codeNumberList.push(word.charCodeAt(i));
  }

  codeNumberList.forEach((number) => {
    if (number === ' '.charCodeAt(0)) {
      answerList.push(' ');
    } else {
      const isUpperCase = number < lastUpperCase;
      const opposite = isUpperCase ? upperCaseSum - number : lowerCaseSum - number;
      answerList.push(String.fromCharCode(opposite));
    }
  });

  return answerList.join('');
}

module.exports = problem4;
