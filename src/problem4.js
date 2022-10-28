function problem4(word) {
  const answer = word.split("").map((char) => reverseChar(char));
  return answer.join("");
}

const reverseChar = (char) => {
  if (/[A-Z]/.test(char)) return String.fromCharCode(155 - char.charCodeAt());
  if (/[a-z]/.test(char)) return String.fromCharCode(219 - char.charCodeAt());
  return char;
};

module.exports = problem4;
