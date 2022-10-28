function problem4(word) {
  var answer;
  return answer;
}
const isAlphabet = (char) => {
  return /^[a-zA-Z]+$/.test(char);
};
const isUpperCase = (char) => {
  return /^[A-Z]+$/.test(char);
};
const getAscii = (char) => {
  return char.charCodeAt(0);
};

module.exports = problem4;
