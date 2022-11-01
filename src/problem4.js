function problem4(word) {
  word = word.split("");
  const answer = word.map((letter) =>
    letter === " " ? " " : transformAlpha(letter)
  );
  function transformAlpha(letter) {
    const ASCII = letter.charCodeAt();
    if (ASCII <= 90) {
      return String.fromCharCode(ASCII + (25 - 2 * (ASCII - 65)));
    } else {
      return String.fromCharCode(ASCII + (25 - 2 * (ASCII - 97)));
    }
  }
  return answer.join("");
}

module.exports = problem4;
