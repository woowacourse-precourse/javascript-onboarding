function problem4(word) {
  var answer;
  return answer;
const isUpperAlphabet = (char) => {
  const regExp = /[A-Z]/g; // 영어
  return regExp.test(char);
}

const isLowerAlphabet = (char) => {
  const regExp = /[a-z]/g; // 영어
  return regExp.test(char);
}

const encryptUpperAlphabet = (char) => {
  return String.fromCharCode('A'.charCodeAt(0) + 'Z'.charCodeAt(0) - char.charCodeAt(0))
}

const encryptLowerAlphabet = (char) => {
  return String.fromCharCode('a'.charCodeAt(0) + 'z'.charCodeAt(0) - char.charCodeAt(0))
}

module.exports = problem4;
